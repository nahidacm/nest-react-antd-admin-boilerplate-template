import { Injectable, Logger } from '@nestjs/common';
import { spawn } from 'child_process';

@Injectable()
export class RsyncService {
  private readonly logger = new Logger(RsyncService.name);

  backup(backup) {

    const credentials = JSON.parse(backup.credential.credentials);
    let dest_dir = backup.dest_dir;
    if (credentials.rsync_type === 'remote') {
      dest_dir = `${credentials.remote_user}@${credentials.remote_host}:${dest_dir}`;
    }

    const rsync = spawn('rsync', [
      credentials.rsync_options,
      backup.source_dir,
      dest_dir,
    ]);

    rsync.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    rsync.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    rsync.on('close', (code) => {
      console.log(`rsync process exited with code ${code}`);
    });
  }
}
