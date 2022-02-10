import { Injectable } from '@angular/core';
import { TransactionClass } from 'src/model/transaction-class.model';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private balance: number;
  private valuePerToken: number;
  private transactionsArray: TransactionClass[];
  constructor() {
    this.balance = 0;
    this.valuePerToken= 0.25;
    this.transactionsArray = [];
   }

   incrementBalance(tokenCount: number){
      this.balance = this.balance + this.valuePerToken*tokenCount;
   }

   decrementBalance(tokenCount: number){
     if(this.balance - tokenCount*this.valuePerToken <= 0){
       return -1
      }else{
       this.balance = this.balance - tokenCount*this.valuePerToken;
       return this.balance;
     }
   }

   addToTransactions(transactionItem: TransactionClass){
     this.transactionsArray.push(transactionItem)
   }

   getBalance(){
     return this.balance;
   }
}
