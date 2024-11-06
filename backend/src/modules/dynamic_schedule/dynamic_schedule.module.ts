import { Module } from '@nestjs/common';
import { DynamicScheduleService } from './dynamic_schedule.service';
import { DynamicScheduleController } from './dynamic_schedule.controller';
import { PrismaService } from 'src/services/prisma.service';
import { BackupJobsService } from '../backup/backup_jobs/backup_jobs.service';
import { RsyncService } from '../backup/rsync/rsync.service';
import { BackupService } from '../backup/backup.service';
import { EncryptionService } from '../utility/encryption/encryption.service';

@Module({
  providers: [
    DynamicScheduleService,
    PrismaService,
    BackupJobsService,
    RsyncService,
    BackupService,
    EncryptionService,
  ],
  controllers: [DynamicScheduleController],
})
export class DynamicScheduleModule {}
