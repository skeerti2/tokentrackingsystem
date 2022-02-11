import { Injectable } from '@angular/core';
import { TransactionClass } from '../model/transaction-class.model';
import {TOKEN_VALUE} from '../constants/constants'
import { TransactionType } from '../constants/transaction-type';
import { Game } from '../model/game.model';

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
    if(this.balance - tokenCount < 0){
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
     console.log(transactionItem)
     if(this.transactionsArray.length === 0){
       this.balance = 0;
     }
      if(transactionItem.getTransactionType() == this.transactionType.BUY){
          this.balance = this.balance + transactionItem.getNoOfTokens();
        }else{
          this.balance = this.balance - transactionItem.getNoOfTokens();
        }
     }


   getBalance(){
     return this.balance;
   }

   getTransactionList(){
     return this.transactionsArray;
   }
}
