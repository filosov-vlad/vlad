import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class CatsController {
  constructor(private service: AppService) {}

  @Post('regester')
  regester(@Body() data: any) {
    return this.service.registret(data.email, data.password);
  }
  
  @Get('find')
  find() {
    return this.service.find();
  }

  @Delete('delete')
  delete(@Body() data: any){
    return this.service.delete(data.email);
  }
}
