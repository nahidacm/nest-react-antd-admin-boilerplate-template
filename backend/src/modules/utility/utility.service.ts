import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { execSync } from 'child_process';

@Injectable()
export class UtilityService {
  async getPublicKey() {
    const publicKeyPath = process.env.HOME + '/.ssh/id_rsa.pub';
    if (!fs.existsSync(publicKeyPath)) {
      execSync(
        'ssh-keygen -t rsa -b 2048 -f ' +
          process.env.HOME +
          '/.ssh/id_rsa -N ""',
      );
    }
    return fs.readFileSync(publicKeyPath, 'utf8');
  }
}
