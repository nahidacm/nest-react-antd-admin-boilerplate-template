import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { EncryptionService } from '../utility/encryption/encryption.service';

@Injectable()
export class CredentialService {
  constructor(
    private prisma: PrismaService,
    private encryptService: EncryptionService,
  ) {}

  async create(data) {
    const encrypted_credential = this.encryptService.encrypt(
      data.credentials,
    );
    data.credentials = encrypted_credential;
    return await this.prisma.credential.create({ data });
  }

  async getCredentials() {
    const creds = await this.prisma.credential.findMany();
    const decryptedCredentials = creds.map((cred) => {
      cred.credentials = this.encryptService.decrypt(cred.credentials);
      return cred;
    });
    return decryptedCredentials;
  }
}
