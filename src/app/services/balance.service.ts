import { Injectable } from '@angular/core';
import { Transaction } from '../model/transaction.model';
import {TOKEN_VALUE} from '../constants/constants'
import { TransactionType } from '../constants/transaction-type';
import { Game } from '../model/game.model';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private balance: number;
  private transactionsArray: Transaction[];
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

   addToTransactions(transactionItem: Transaction){
     this.transactionsArray.push(transactionItem)
     this.computeBalance(transactionItem)
   }

   private computeBalance(transactionItem: Transaction){
     console.log(transactionItem)
     if(this.transactionsArray.length === 0){
       this.balance = 0;
     }
      if(transactionItem.transactionType == this.transactionType.BUY){
          this.balance = this.balance + transactionItem.noOfTokens;
        }else{
          this.balance = this.balance - transactionItem.noOfTokens;
        }
     }


   getBalance(){
     return this.balance;
   }

   getTransactionList(){
     return this.transactionsArray;
   }
}
