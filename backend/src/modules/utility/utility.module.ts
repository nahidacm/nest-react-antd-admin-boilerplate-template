import { Module } from '@nestjs/common';
import { EncryptionService } from './encryption/encryption.service';
import { UtilityController } from './utility.controller';
import { UtilityService } from './utility.service';

@Module({
  providers: [EncryptionService, UtilityService],
  controllers: [UtilityController]
})
export class UtilityModule {}
