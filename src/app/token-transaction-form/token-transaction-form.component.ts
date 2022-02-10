import { Component, OnInit } from '@angular/core';
import {TransactionClass} from '../../model/transaction-class.model';
import {BalanceService} from '../services/balance.service';

@Component({
  selector: 'app-token-transaction-form',
  templateUrl: './token-transaction-form.component.html',
  styleUrls: ['./token-transaction-form.component.css']
})
export class TokenTransactionFormComponent implements OnInit {
  //private balance: number;
  private TransactionsArray = [];
  //private tokenValue: number;
  constructor(private _balanceServive: BalanceService) {
    //this.balance = 0;
    //this.TransactionsArray = [];
   }

  ngOnInit(): void {
    //this.TransactionsArray = this._balanceServive.
  }

  // getBalance(){
  //   return this.balance
  // }

  submit(formItems: any){
    let transaction = new TransactionClass(formItems.value.description, formItems.value.noOfTokens)
    this._balanceServive.addToTransactions(transaction)
    console.log(this.TransactionsArray)
    if(formItems.value.tokenTransactionType === "buy"){
      this._balanceServive.incrementBalance(transaction.getNoOfTokens())
      //this.balance = this.balance + transaction.getNoOfTokens()*this.tokenValue;
    }else if(formItems.value.tokenTransactionType === "spend"){
      this._balanceServive.decrementBalance(transaction.getNoOfTokens())
      //this.balance = this.balance - transaction.getNoOfTokens()*this.tokenValue;
    }
  }

}
