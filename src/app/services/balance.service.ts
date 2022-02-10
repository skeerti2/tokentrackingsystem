import { Injectable } from '@angular/core';
import { TransactionClass } from '../model/transaction-class.model';

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

   isInValidTransaction(tokenCount: number){
    if(this.balance - tokenCount*this.valuePerToken < 0){
      return true
    }
    return false
  }

  getTokenValue(){
    return this.valuePerToken;
  }

   decrementBalance(tokenCount: number){
       this.balance = this.balance - tokenCount*this.valuePerToken;
       return this.balance;
   }

   addToTransactions(transactionItem: TransactionClass){
     this.transactionsArray.push(transactionItem)
   }

   getBalance(){
     return this.balance;
   }

   getTransactionList(){
     return this.transactionsArray;
   }
}
