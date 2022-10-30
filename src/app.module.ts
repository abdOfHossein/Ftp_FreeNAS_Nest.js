import { Module, Req } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FtpModule } from 'nestjs-ftp';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    FtpModule.forRootFtpAsync({
      useFactory: async () => {
        return {
          host: '192.168.77.128',
          password: '774936188',
          port: 21,
          user: 'root',
        };
      },
    }),
    MulterModule.register({
      dest: join(process.cwd(),`/src/upload`),
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
