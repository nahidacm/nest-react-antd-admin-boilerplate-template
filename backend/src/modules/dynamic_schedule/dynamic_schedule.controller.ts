import { Body, Controller, Post, Get, Delete, Query, Param, Patch } from '@nestjs/common';
import { DynamicScheduleService } from './dynamic_schedule.service';

@Controller('dynamic-schedule')
export class DynamicScheduleController {
  constructor(private dynamicScheduleService: DynamicScheduleService) {}

  @Post('add')
  async addSchedule(@Body() data) {
    return this.dynamicScheduleService.addSchedule(
      data.cron_expression,
      data.job_name,
      data.job_details
    );
  }

  @Patch('update/:id')
  async updateSchedule(@Param('id') id: number, @Body() data) {
    return this.dynamicScheduleService.updateSchedule(+id, data);
  }

  @Delete('remove/:id')
  async removeSchedule(@Param('id') id: number) {
    console.log('remove', id);
    return this.dynamicScheduleService.removeSchedule(+id);
  }

  @Get('list')
  async listSchedules() {
    return this.dynamicScheduleService.listSchedules();
  }

  @Get('restart/:id')
  async restartSchedule(@Param('id') id) {
    return await this.dynamicScheduleService.restartSchedule(+id);
  }
}