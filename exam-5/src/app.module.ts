import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { productsModule } from './product/products.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [productsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
