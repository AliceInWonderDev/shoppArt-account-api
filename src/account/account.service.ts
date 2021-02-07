import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

type Account = {
    id:string;
    name?:string;
    email?:string;
    profilePicture?:string;
    username?:string;
    phoneNumber?:string;
    address?:string;
}

// const accounts: Array<Account> = [
//     ...[...Array(6)].map(() => ({ id: uuid(), name: Math.random().toString(36).substring(7) }))
// ]

@Injectable()
export class AccountService {
    private accounts: Account[] = [];
    async getAccounts(): Promise<Account[]>{
        return this.accounts;
    }
    async getAccount(id: string): Promise<Account> {
        console.log('id', id);
        console.log('account', this.accounts);
        return this.accounts.find(account => account.id === id );
    }
    async createAccount(data: Account): Promise<Account> {
        data.id = uuid()
        this.accounts.push(data);
        return data;
    }
    async deleteAccount(id: string): Promise<number> {
       const resp = await this.getAccount(id);
       if(!Boolean(resp)){
        return 0
       }
       const findIndex = this.accounts.findIndex(item => item.id === id);
       const removeItem = this.accounts.splice(findIndex, 1);
       if(removeItem.length === 0){
        return 0;
       }
       return 1
    }
}