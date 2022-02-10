import { Component, OnInit } from '@angular/core';
import {TransactionClass} from '../model/transaction-class.model';
import {BalanceService} from '../services/balance.service';

@Component({
  selector: 'app-token-transaction-form',
  templateUrl: './token-transaction-form.component.html',
  styleUrls: ['./token-transaction-form.component.css']
})
export class TokenTransactionFormComponent implements OnInit {
  constructor(private _balanceService: BalanceService) {
  }

  ngOnInit(): void {
  }

  submit(formItems: any){
    let transaction = new TransactionClass(formItems.value.description, formItems.value.noOfTokens)
      if(formItems.value.tokenTransactionType === "buy"){
        this._balanceService.addToTransactions(transaction)
        this._balanceService.incrementBalance(transaction.getNoOfTokens())
      }else if(formItems.value.tokenTransactionType === "spend" && !this._balanceService.isInValidTransaction(transaction.getNoOfTokens())){
        this._balanceService.addToTransactions(transaction)
        this._balanceService.decrementBalance(transaction.getNoOfTokens())
      }
      console.log(this._balanceService.getBalance())
      console.log(this._balanceService.getTransactionList())

    }

}
