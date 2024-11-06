import { Module } from '@nestjs/common';
import { CredentialController } from './credential.controller';
import { CredentialService } from './credential.service';
import { PrismaService } from 'src/services/prisma.service';
import { EncryptionService } from '../utility/encryption/encryption.service';

@Module({
  controllers: [CredentialController],
  providers: [CredentialService, PrismaService, EncryptionService]
})
export class CredentialModule {}
