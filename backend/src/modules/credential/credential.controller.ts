import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { CredentialService } from './credential.service';

@Controller('credential')
export class CredentialController {
  constructor(private credentialService: CredentialService) {}

  @Post('create')
  create(@Body() data, @Request() req) {
    return this.credentialService.create({ ...data, user_id: req.user.sub });
  }

  @Get('all')
  getCredentials() {
    return this.credentialService.getCredentials();
  }
}
