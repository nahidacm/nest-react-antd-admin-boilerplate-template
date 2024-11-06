import { Controller, Get } from '@nestjs/common';
import { Role } from '../auth/role.enum';
import { Roles } from '../auth/roles.decorator';
import { UtilityService } from './utility.service';

@Controller('utility')
export class UtilityController {
  constructor(private utilityService: UtilityService) {}

  @Get('ssh-public-key')
  @Roles(Role.Admin)
  getPublicKey() {
    return this.utilityService.getPublicKey();
  }
}
