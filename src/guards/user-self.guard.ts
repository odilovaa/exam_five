import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";


@Injectable()
export class  UserSelfGuard implements CanActivate {
    canActivate(
        context: ExecutionContext
        ): boolean | Promise<boolean> | Observable<boolean> {
            const req = context.switchToHttp().getRequest();
            console.log(req);
            if(String(req.user.id) !== req.params.id) {
                throw new ForbiddenException({
                    message: 'You are not allowed'
                });
            }
            return true;
    }
}