import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { RsyncService } from '../rsync/rsync.service';
import { BackupService } from '../backup.service';

@Injectable()
export class BackupJobsService {
  constructor(private prismaService: PrismaService, private rsyncService: RsyncService, private backupService: BackupService) {}

  async processJob(id, job_details) {

    const backup = await this.backupService.findOne(id);

    switch (backup.dest_type) {
      case 'rsync':
        this.rsyncService.backup(backup);
        break;
    }
  }
}
