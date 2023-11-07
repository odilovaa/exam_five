import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './admin/models/admin.model';
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
import { BookCategory } from './book_category/models/book_category.model';
import { BookPrint } from './book_print/models/book_print.model';
import { ClientType } from './client_type/models/client_type.model';
import { Language } from './language/models/language.model';
import { BoughtProduct } from './bought_product/models/bought_product.model';
import { WorkerType } from './worker_type/models/worker_type.model';
import { Author } from './author/models/author.model';
import { Worker } from './worker/models/worker.model';
import { Book } from './book/models/book.model';
import { Client } from './client/models/client.model';
import { HistoryType } from './history_type/models/history_type.model';
import { Order } from './order/models/order.model';
import { History } from './history/models/history.model';

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
      models: [ Admin, BookCategory, BookPrint, ClientType, Language, BoughtProduct, WorkerType, Author, Worker, Book, Client, HistoryType, Order, History],
      autoLoadModels: true,
      logging: true,
    }),

    AdminModule,
    
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
    
    WorkerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
