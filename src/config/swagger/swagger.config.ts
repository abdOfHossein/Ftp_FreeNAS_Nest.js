import { DocumentBuilder } from "@nestjs/swagger";

export const config = new DocumentBuilder()
.setTitle('FTP,FressNAS in Nest.js')
.setDescription('upload image with ftp in freenas')
.setVersion('1.0')
.build();
