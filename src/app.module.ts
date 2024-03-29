import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module( {
  imports: [
    ConfigModule.forRoot( {
      envFilePath: '.env',
      isGlobal: true,
    } ),
    AuthModule,
    MongooseModule.forRoot( process.env.DB_CONNECT )
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
} )
export class AppModule { }
