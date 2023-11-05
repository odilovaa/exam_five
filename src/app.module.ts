import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './admin/models/admin.model';
import { RoleModule } from './role/role.module';
import { LanguageModule } from './language/language.module';
import { BookPrintModule } from './book_print/book_print.module';
import { BookCategoryModule } from './book_category/book_category.module';
import { ClientTypeModule } from './client_type/client_type.module';
import { WorkerTypeModule } from './worker_type/worker_type.module';
import { HistoryTypeModule } from './history_type/history_type.module';
import { AuthorModule } from './author/author.module';
import { ClientModule } from './client/client.module';
import { BoughtProductModule } from './bought_product/bought_product.module';
import { BookModule } from './book/book.module';
import { OrderModule } from './order/order.module';
import { HistoryModule } from './history/history.module';
import { WorkerModule } from './worker/worker.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),

    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [Admin],
      autoLoadModels: true,
      logging: true,
    }),
    
    AdminModule,
    
    RoleModule,
    
    LanguageModule,
    
    BookPrintModule,
    
    BookCategoryModule,
    
    ClientTypeModule,
    
    WorkerTypeModule,
    
    HistoryTypeModule,
    
    AuthorModule,
    
    ClientModule,
    
    BoughtProductModule,
    
    BookModule,
    
    OrderModule,
    
    HistoryModule,
    
    WorkerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
