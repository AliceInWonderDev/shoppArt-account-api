import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AccountService } from './account/account.service';

@Controller()
export class AppController {
  constructor(private readonly accountService: AccountService) {}

  @Get('/:id')
  async getAccount(@Param() params:any): Promise<any>{
    return this.accountService.getAccount(params.id);
  }
  @Post()
  async createAccount(@Body() account:any): Promise<any>{
    return this.accountService.createAccount(account);
  }
  @Delete('/:id')
  async deleteAccount(@Param() params:any): Promise<number>{
    return this.accountService.deleteAccount(params.id);
  }
}
