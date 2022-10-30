import { MulterModule } from '@nestjs/platform-express';

MulterModule.register({
  dest: './upload',
});
