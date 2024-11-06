import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
  Response,
} from '@nestjs/common';
import { BackupService } from './backup.service';
import { CreateBackupDto, UpdateBackupDto } from './backup.dto';
import { Role } from '../auth/role.enum';
import { Roles } from '../auth/roles.decorator';

@Controller('backup')
export class BackupController {
  constructor(private backupService: BackupService) {}

  @Post('create')
  createBackup(@Body() data: CreateBackupDto, @Request() req) {
    // admin can create backup for any user
    if (req.user.role === Role.Admin) {
      data.user_id = data.user_id ? data.user_id : req.user.sub;
    } else {
      data.user_id = req.user.sub;
    }

    return this.backupService.createBackup(data);
  }

  @Patch('update/:id')
  async updateBackup(
    @Body() data: UpdateBackupDto,
    @Param('id') id: string,
    @Request() req,
    @Response() res,
  ) {
    // admin can update backup for any user, and user can only update his own backup
    if (req.user.role != Role.Admin) {
      if (!(await this.backupService.isOwner(+id, req.user.sub))) {
        return res.status(403).json({
          message: 'Forbidden resource',
          error: 'Forbidden',
          statusCode: 403,
        });
      }
    }

    const backup = await this.backupService.updateBackup(+id, data);
    return res.status(200).json(backup);
  }

  @Delete('delete/:id')
  async deleteBackup(@Param('id') id: string, @Request() req, @Response() res) {
    // admin can delete backup for any user, and user can only delete his own backup
    if (req.user.role != Role.Admin) {
      if (!(await this.backupService.isOwner(+id, req.user.sub))) {
        return res.status(403).json({
          message: 'Forbidden resource',
          error: 'Forbidden',
          statusCode: 403,
        });
      }
    }

    const backup = await this.backupService.remove(+id);
    return res.status(200).json(backup);
  }

  @Patch('update/:id')
  async enableBackup(@Param('id') id: string, @Body() data: UpdateBackupDto, @Request() req, @Response() res) {
    // admin can enable backup for any user, and user can only enable his own backup
    if (req.user.role != Role.Admin) {
      if (!(await this.backupService.isOwner(+id, req.user.sub))) {
        return res.status(403).json({
          message: 'Forbidden resource',
          error: 'Forbidden',
          statusCode: 403,
        });
      }
    }

    const backup = await this.backupService.updateBackup(+id, data);
    return res.status(200).json(backup);
  }

  @Get('all')
  @Roles(Role.Admin)
  async findAll(@Query() query) {
    return await this.backupService.findAll(query);
  }

  @Get('detail/:id')
  @Roles(Role.Admin)
  async findOne(@Param('id') id: string, @Request() req, @Response() res) {
    // admin can update backup for any user, and user can only update his own backup
    if (req.user.role != Role.Admin) {
      if (!(await this.backupService.isOwner(+id, req.user.sub))) {
        return res.status(403).json({
          message: 'Forbidden resource',
          error: 'Forbidden',
          statusCode: 403,
        });
      }
    }
    const backup = await this.backupService.findOne(+id);
    return res.status(200).json(backup);
  }
}
