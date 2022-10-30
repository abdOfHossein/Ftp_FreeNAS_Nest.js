import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import { FtpService } from 'nestjs-ftp';
import { join } from 'path';

@Injectable()
export class AppService {
  constructor(private readonly _ftpService: FtpService) {}

  async uploadFreeNAS() {
    try {
     const fileDir= await fs.readdir(join(process.cwd(), '/src/upload/'));
      
      const file = await fs.readFile(join(process.cwd(), `/src/upload/${fileDir[0]}`), 'utf-8');

      await this._ftpService.upload(join(process.cwd(), `/src/upload/${fileDir[0]}`), '/mnt/nfs/nfs1/image1');
      console.log('ok');
      return('ok')
    } catch (error) {
      throw new Error(error);
    }
  }

  async downloadFreeNAS() {
    try {
     const fileDir= await fs.readdir(join(process.cwd(), '/src/upload/'));
      
      const file = await fs.readFile(join(process.cwd(), `/src/upload/${fileDir[0]}`), 'utf-8');

      await this._ftpService.downloadTo(join(process.cwd(), `/src/download/image1`), '/mnt/nfs/nfs1/image1');
      console.log('ok');
      return('ok')
    } catch (error) {
      throw new Error(error);
    }
  }
}
