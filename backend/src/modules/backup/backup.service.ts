import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateBackupDto, UpdateBackupDto } from './backup.dto';
import { EncryptionService } from '../utility/encryption/encryption.service';

@Injectable()
export class BackupService {
  constructor(private prisma: PrismaService, private encryptionService: EncryptionService) {}

  async createBackup(data: CreateBackupDto) {
    return await this.prisma.backup.create({ data });
  }

  async updateBackup(id: number, data: UpdateBackupDto) {
    return await this.prisma.backup.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async remove(id: number) {
    return await this.prisma.backup.delete({
      where: {
        id: id,
      },
    });
  }

  async findAll(query) {
    if (query.skip) {
      query.skip = +query.skip;
    }
    if (query.take) {
      query.take = +query.take;
    }

    return await this.prisma.backup.findMany({
      ...query
    });
  }

  async findOne(id: number) {
    const res = await this.prisma.backup.findUnique({
      where: {
        id: id,
      },
      include: {
        credential: true,
      }
    });
    if (res.credential) {
      res.credential.credentials = this.encryptionService.decrypt(res.credential.credentials);
    }
    return res;
  }

  async isOwner(id: number, user_id: number) {
    return await this.prisma.backup.findUnique({
      where: {
        id: id,
        user_id: user_id,
      },
    }).then((res) => {
      if (res) {
        return true;
      }
      return false;
    });
  }
}
