import { BadRequestException, CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Admin } from "../admin/models/admin.model";

@Injectable()
export class AdminGuard implements CanActivate{
    constructor(private readonly jwtService: JwtService){}

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
            if(admin.role != 'ADMIN' || 'SUPERADMIN')
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