import { BadRequestException, ForbiddenException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Worker } from './models/worker.model';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
import { LoginWorkerdto } from './dto/loginWorker.dto';
import { workerData } from 'worker_threads';


@Injectable()
export class WorkerService {
  constructor(
    @InjectModel(Worker) private readonly workerRepo: typeof Worker,
    private readonly jwtService: JwtService,

  ){}

  async getTokens(worker: Worker) {
    const jwtPayload = {
      id: worker.id,
      password: worker.hashed_password,
    };

    const [acceessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY_W,
        expiresIn: process.env.ACCESS_TOKEN_TIME_W
      }),

      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY_W,
        expiresIn: process.env.REFRESH_TOKEN_TIME_W
      }),

    ]);
    return {
      access_token: acceessToken,
      refresh_token: refreshToken,
    };
  }

  async registration(createWorkerDto: CreateWorkerDto, res: Response) {
    const worker = await this.workerRepo.findOne({
      where: {phone_number: createWorkerDto.phone_number},
    });
    if(worker) {
      throw new BadRequestException('Worker already exits!')
    }

    const hashed_password = await bcrypt.hash(createWorkerDto.password, 7);
    const newWorker = await this.workerRepo.create({
      ...createWorkerDto,
      hashed_password: hashed_password,
    });

    const tokens = await this.getTokens(newWorker);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updateWorker = await this.workerRepo.update(
      {
        hashed_refreshToken: hashed_refresh_token,
      },
      { where: { id: newWorker.id}, returning: true}
    );
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'Worker registred',
      worker: updateWorker[1][0],
      tokens,
    };
    return response;
  }

  async login(loginWorkerdto: LoginWorkerdto, res: Response) {
    const  {email, password} = loginWorkerdto;
    const worker = await this.workerRepo.findOne({where: {email}});

    if(!worker) {
      throw new UnauthorizedException('worker not registred')
    }

    const isMatchPass = await bcrypt.compare(password, worker.hashed_password);

    if(!isMatchPass) {
      throw new UnauthorizedException('worker not registred(password)')
    }

    const tokens = await this.getTokens(worker);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updateworker = await this.workerRepo.update({
      hashed_refreshToken: hashed_refresh_token
    },
    {where: {id: worker.id}, returning: true}
    );

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 100,
      httpOnly: true 
    });

    const response = {
      message: 'worker logged in',
      worker: updateworker[1][0],
      tokens
    };
    return response;
  }

  async logout(refreshToken: string, res: Response) {
    const WorkerData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY_FA,
    });
    if(!WorkerData) {
      throw new ForbiddenException('worker not found');
    }
  
    const updateWorker = await this.workerRepo.update(
      { hashed_refreshToken: null},
      { where: {id: WorkerData.id}, returning: true}
    );
  
    res.clearCookie('refresh_token');
    const response = {
      message: 'Worker logged out seccessfully',
      worker: updateWorker[1][0],
    };
    return response;
  }

  async refreshToken(worker_id: number, refreshToken: string, res: Response) {
    const decodedToken = this.jwtService.decode(refreshToken);
    if(worker_id != decodedToken['id']) {
      throw new BadRequestException('worker not found')
    }
    
    const worker = await this.workerRepo.findOne({ where: {id: worker_id}});
    if (!worker || !worker.hashed_refreshToken) {
      throw new BadRequestException('worker not found')
    }
    const tokenMatch = await bcrypt.compare(
      refreshToken,
      worker.hashed_refreshToken
    );
    if(!tokenMatch) {
      throw new ForbiddenException('Forbidden');
    }

    const tokens = await this.getTokens(worker);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updateworker = await this.workerRepo.update(
      { hashed_refreshToken: hashed_refresh_token},
      { where: {id: worker.id}, returning: true},
    );


    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 100,
      httpOnly: true
    });

    const response = {
      message: ' Token refreshed',
      worker: updateworker[1][0],
      tokens
    };
    return response;
  }

  async findAll() {
    const worker = await this.workerRepo.findAll({include: {all: true}});
    return worker;
  }

  async findOne(id: number) {
    const worker = await this.workerRepo.findOne({where: {id}});
    if(!worker) {
      return {message: "worker not found"}
    }
    return worker;
  }

  async update(id: number, updateWorkerDto: UpdateWorkerDto) {
    const updateAdmin = await this.workerRepo.update(updateWorkerDto, {where: {id}, returning: true});
    return updateAdmin[1][0];
  }

  async remove(id: number) {
    const worker = await this.workerRepo.destroy({where: {id}});
    if(!worker)
    {
      throw new HttpException('worker not found!', HttpStatus.NOT_FOUND)
    }
    return {message: 'worker delated'};
  }
}
