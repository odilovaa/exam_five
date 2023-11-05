import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { Worker } from "../worker/models/worker.model";
import { Admin } from "../admin/models/admin.model";


@Injectable()
export class MailService {
    constructor(private mailerService: MailerService){}

    async sendAdminConfirm(admin: Admin) :Promise<void>{
        const url = `${process.env.API_HOST}/api/admin/activate/${admin.activation_link}`;
        console.log(url);
        
        await this.mailerService.sendMail({
            to: admin.email,
            subject: 'Welcome to Print House App! Confirm your Email',
            template: './confirmation',
            context: {
                name: admin.full_name,
                url
            },
        })
        
    }
}