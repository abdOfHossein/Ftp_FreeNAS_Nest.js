import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { AppService } from './app.service';
import { Helper } from './config/multer/multer.helper';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: Helper.destinationPath,
        filename: Helper.customFileName,
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      // console.log(file.originalname);
      // console.log(file.filename);
      console.log(file);

      return file;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  @Get('uploadFreeNAS')
  uploadFreeNAS() {
    return this.appService.uploadFreeNAS();
  }

  @Get('downloadFreeNAS')
  downloadFreeNAS() {
    return this.appService.downloadFreeNAS();
  }
}
