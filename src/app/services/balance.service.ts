import { Injectable } from '@angular/core';
import { TransactionClass } from '../model/transaction-class.model';
import {TOKEN_VALUE} from '../constants/constants'
import { TransactionType } from '../constants/transaction-type';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private balance: number;
  private transactionsArray: TransactionClass[];
  transactionType = TransactionType
  constructor() {
    this.balance = 0;
    this.transactionsArray = [];
   }

   isInValidTransaction(tokenCount: number){
    if(this.balance - tokenCount*TOKEN_VALUE < 0){
      return true
    }
    return false
  }

  getTokenValue(){
    return TOKEN_VALUE;
  }

   addToTransactions(transactionItem: TransactionClass){
     this.transactionsArray.push(transactionItem)
     this.computeBalance(transactionItem)
   }

   private computeBalance(transactionItem: TransactionClass){
     if(this.transactionsArray.length === 0){
       this.balance = 0;
     }
      if(transactionItem.getTransactionType() == this.transactionType.BUY){
          this.balance = this.balance + transactionItem.getNoOfTokens()*TOKEN_VALUE;
        }else{
          this.balance = this.balance - transactionItem.getNoOfTokens()*TOKEN_VALUE;
        }
     }


   getBalance(){
     return this.balance;
   }

   getTransactionList(){
     return this.transactionsArray;
   }
}
