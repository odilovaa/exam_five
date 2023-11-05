import { BadRequestException, ForbiddenException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { LoginAdmindto } from './dto/loginAdmin.dto';
import { v4 } from 'uuid';


@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private readonly adminRepo: typeof Admin,
    private readonly jwtService: JwtService,

  ){}

  async getTokens(admin: Admin) {
    const jwtPayload = {
      id: admin.id,
      password: admin.hashed_password,
      role: admin.roleId,
      is_active: admin.is_active
    };

    const [acceessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME
      }),

      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME
      }),

    ]);
    return {
      access_token: acceessToken,
      refresh_token: refreshToken,
    };
  }

  async registration(createAdminDto: CreateAdminDto, res: Response) {
    const admin = await this.adminRepo.findOne({
      where: {phone_number: createAdminDto.phone_number},
    });
    if(admin) {
      throw new BadRequestException('Admin already exits!')
    }

    const hashed_password = await bcrypt.hash(createAdminDto.password, 7);
    const newAdmin = await this.adminRepo.create({
      ...createAdminDto,
      hashed_password: hashed_password,
    });

    const tokens = await this.getTokens(newAdmin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const uniqueKey: string = v4();

    const updateAdmin = await this.adminRepo.update(
      {
        hashed_refreshToken: hashed_refresh_token,
        activation_link: uniqueKey,
      },
      { where: { id: newAdmin.id}, returning: true}
    );
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'Admin registred',
      admin: updateAdmin[1][0],
      tokens,
    };
    return response;
  }

  async activate(link: string) {
    if(!link){
      throw new BadRequestException('Activation link not found');
    }
    const updateAdmin = await this.adminRepo.update(
      { is_active: true},
      { where: {activation_link: link, is_active: false},returning: true, },
    );

    if(!updateAdmin[1][0]) {
      throw new BadRequestException('Admin already activated');
    }
    const response = {
      message: 'Admin activated successfully',
      admin: updateAdmin,
    };
    return response;
  }

  async login(loginAdmindto: LoginAdmindto, res: Response) {
    const  {email, password} = loginAdmindto;
    const admin = await this.adminRepo.findOne({where: {email}});

    if(!admin) {
      throw new UnauthorizedException('Admin not registred')
    }

    const isMatchPass = await bcrypt.compare(password, admin.hashed_password);

    if(!isMatchPass) {
      throw new UnauthorizedException('Admin not registred(password)')
    }

    const tokens = await this.getTokens(admin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updateAdmin = await this.adminRepo.update({
      hashed_refreshToken: hashed_refresh_token
    },
    {where: {id: admin.id}, returning: true}
    );

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 100,
      httpOnly: true 
    });

    const response = {
      message: 'Admin logged in',
      admin: updateAdmin[1][0],
      tokens
    };
    return response;
  }

  async logout(refreshToken: string, res: Response) {
    const AdminData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY_FA,
    });
    if(!AdminData) {
      throw new ForbiddenException('Admin not found');
    }
  
    const updateAdmin = await this.adminRepo.update(
      { hashed_refreshToken: null},
      { where: {id: AdminData.id}, returning: true}
    );
  
    res.clearCookie('refresh_token');
    const response = {
      message: 'Admin logged out seccessfully',
      admin: updateAdmin[1][0],
    };
    return response;
  }

  async refreshToken(admin_id: number, refreshToken: string, res: Response) {
    const decodedToken = this.jwtService.decode(refreshToken);
    if(admin_id != decodedToken['id']) {
      throw new BadRequestException('Admin not found')
    }
    
    const admin = await this.adminRepo.findOne({ where: {id: admin_id}});
    if (!admin || !admin.hashed_refreshToken) {
      throw new BadRequestException('Admin not found')
    }
    const tokenMatch = await bcrypt.compare(
      refreshToken,
      admin.hashed_refreshToken
    );
    if(!tokenMatch) {
      throw new ForbiddenException('Forbidden');
    }

    const tokens = await this.getTokens(admin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updateAdmin = await this.adminRepo.update(
      { hashed_refreshToken: hashed_refresh_token},
      { where: {id: admin.id}, returning: true},
    );


    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 100,
      httpOnly: true
    });

    const response = {
      message: ' Token refreshed',
      admin: updateAdmin[1][0],
      tokens
    };
    return response;
  }

  async findAll() {
    const admin = await this.adminRepo.findAll({include: {all: true}});
    return admin;
  }

  async findOne(id: number) {
    const admin = await this.adminRepo.findOne({where: {id}});
    if(!admin) {
      return {message: "Admin not found"}
    }
    return admin;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const updateAdmin = await this.adminRepo.update(updateAdminDto, {where: {id}, returning: true});
    return updateAdmin[1][0];
  }

  async remove(id: number) {
    const admin = await this.adminRepo.destroy({where: {id}});
    if(!admin)
    {
      throw new HttpException('Admin not found!', HttpStatus.NOT_FOUND)
    }
    return {message: 'Admin delated'};
  }
}
