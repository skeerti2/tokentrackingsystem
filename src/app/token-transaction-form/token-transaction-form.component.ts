import { Component, OnInit } from '@angular/core';
import {TransactionClass} from '../model/transaction-class.model';
import {BalanceService} from '../services/balance.service';
import {TransactionType} from '../constants/transaction-type'

@Component({
  selector: 'app-token-transaction-form',
  templateUrl: './token-transaction-form.component.html',
  styleUrls: ['./token-transaction-form.component.css']
})
export class TokenTransactionFormComponent implements OnInit {
  transactionType = TransactionType;
  constructor(private _balanceService: BalanceService) {
  }

  ngOnInit(): void {
  }

  submit(formItems: any){
    let transaction = new TransactionClass(formItems.value.description, formItems.value.noOfTokens, formItems.value.tokenTransactionType)
    console.log(typeof Number(formItems.value.tokenTransactionType))
    console.log(typeof this.transactionType.BUY)
    if(formItems.value.tokenTransactionType == this.transactionType.BUY){
        this._balanceService.addToTransactions(transaction)
      }else if(formItems.value.tokenTransactionType == this.transactionType.SPEND && !this._balanceService.isInValidTransaction(transaction.getNoOfTokens())){
        this._balanceService.addToTransactions(transaction)
      }
      console.log(this._balanceService.getTransactionList())
      console.log(this._balanceService.getBalance())

    }

}
