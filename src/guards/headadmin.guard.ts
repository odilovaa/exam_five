import { BadRequestException, CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Admin } from "../admin/models/admin.model";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "../role/models/role.entity";


@Injectable()
export class HeadAdminGuard implements CanActivate{
    constructor(private readonly jwtService: JwtService,
        @InjectModel(Role) private RoleRepo: typeof Role){}

    canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;
        if(!authHeader) {
            throw new UnauthorizedException('User unauthorized');
        }

        const bearer = authHeader.split(' ')[0];
        const token = authHeader.split(' ')[1];
        if(bearer != 'Bearer' || !token) {
            throw new UnauthorizedException('User unauthorized');
        }
        async function verify(token: string, jwtService: JwtService) {
            const admin: Partial<Admin> = await jwtService.verify(token, {
                secret: process.env.ACCESS_TOKEN_KEY_FA,
            });
            if(!admin) {
                throw new UnauthorizedException('Invalid token provided');
            }
            if(!admin.is_active) {
                throw new BadRequestException('user is not active');
            }
            const role = await this.RoleRepo.findOne({where: {id: admin.roleId}})
            if(role != 'HEADADMIN' || 'SUPERADMIN')
            {
                throw new ForbiddenException({
                    message: 'You are not allowed'
                });
            }
            return true
        }
        return verify(token, this.jwtService)
    }
}