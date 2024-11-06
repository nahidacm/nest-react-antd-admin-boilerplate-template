import { PartialType } from '@nestjs/mapped-types';

export class CreateBackupDto {
  name: string;
  source_dir: string;
  dest_dir: string;
  dest_type: string;
  user_id: number;
  credential_id: number;
}

export class UpdateBackupDto extends PartialType(CreateBackupDto) {}
