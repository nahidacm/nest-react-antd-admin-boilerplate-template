import { Module } from '@nestjs/common';
import { BackupService } from './backup.service';
import { BackupController } from './backup.controller';
import { PrismaService } from 'src/services/prisma.service';
import { RsyncService } from './rsync/rsync.service';
import { BackupJobsService } from './backup_jobs/backup_jobs.service';
import { EncryptionService } from '../utility/encryption/encryption.service';

@Module({
  providers: [BackupService, PrismaService, RsyncService, BackupJobsService, EncryptionService],
  controllers: [BackupController]
})
export class BackupModule {}
