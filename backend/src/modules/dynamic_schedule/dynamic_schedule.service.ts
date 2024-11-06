import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CronJob } from 'cron';
import { SchedulerRegistry } from '@nestjs/schedule';
import { BackupJobsService } from '../backup/backup_jobs/backup_jobs.service';

@Injectable()
export class DynamicScheduleService implements OnModuleInit {
  private jobs: Map<number, CronJob> = new Map();

  constructor(
    private prisma: PrismaService,
    private schedulerRegistry: SchedulerRegistry,
    private backupJobsService: BackupJobsService,
  ) {}
  // Load active schedules on application start
  async onModuleInit() {
    await this.loadSchedules();
  }

  // Fetch schedules from the database and start cron jobs
  async loadSchedules() {
    const schedules = await this.prisma.schedule.findMany({
      where: { is_active: true },
    });

    schedules.forEach((schedule) => this.scheduleJob(schedule));
  }

  // Schedule a single job
  scheduleJob(schedule: {
    id: number;
    cron_expression: string;
    job_name: string;
    job_details: string;
  }) {
    const job = new CronJob(schedule.cron_expression, () => {
      console.log(`Executing job: ${schedule.job_name}`);
      // Add the job's logic here
      const job_details = JSON.parse(schedule.job_details);
      switch (job_details.job_type) {
        case 'backup':
          this.backupJobsService.processJob(schedule.id, job_details);
          break;
      }
    });

    job.start();
    this.jobs.set(schedule.id, job);
  }

  // Add a new schedule to the database and start the cron job
  async addSchedule(
    cron_expression: string,
    job_name: string,
    job_details: string,
  ) {
    const schedule = await this.prisma.schedule.create({
      data: { cron_expression, job_name, job_details, is_active: true },
    });
    this.scheduleJob(schedule);
    return schedule;
  }

  async updateSchedule(id: number, data: any) {
    const schedule = await this.prisma.schedule.update({
      where: { id },
      data,
    });
    this.restartSchedule(id);
    return schedule;
  }

  async listSchedules() {
    const schedules = await this.prisma.schedule.findMany();
    return schedules;
  }

  // Remove a schedule from the database and stop the cron job
  async removeSchedule(id: number) {
    const job = this.jobs.get(id);
    if (job) {
      job.stop();
      this.jobs.delete(id);
    }
    await this.prisma.schedule.delete({ where: { id } });
  }

  async findOne(id: number) {
    return await this.prisma.schedule.findUnique({ where: { id } });
  }

  async restartSchedule(id: number) {
    const job = this.jobs.get(id);
    if (job) {
      job.stop();
      this.jobs.delete(id);
    }
    const schedule = await this.findOne(id);
    if (schedule.is_active) {
      this.scheduleJob(schedule);
    }

    return schedule;
  }
}
