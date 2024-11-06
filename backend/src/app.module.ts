import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { BackupModule } from './modules/backup/backup.module';
import { UtilityModule } from './modules/utility/utility.module';
import { ScheduleModule } from '@nestjs/schedule';
import { DynamicScheduleModule } from './modules/dynamic_schedule/dynamic_schedule.module';
import { CredentialModule } from './modules/credential/credential.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    BackupModule,
    UtilityModule,
    DynamicScheduleModule,
    CredentialModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
