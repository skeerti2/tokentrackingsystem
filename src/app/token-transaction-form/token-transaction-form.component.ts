import { Component, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction.model';
import { BalanceService } from '../services/balance.service';
import { TransactionType } from '../constants/transaction-type'
import { Game } from '../model/game.model';

@Component({
  selector: 'app-token-transaction-form',
  templateUrl: './token-transaction-form.component.html',
  styleUrls: ['./token-transaction-form.component.css']
})
export class TokenTransactionFormComponent implements OnInit {
  transactionType = TransactionType;
  model = new Transaction("Description", 1, TransactionType.BUY, {} as Game)
  games = [new Game("Sonic Adventure Game", 5), new Game("Pac man", 7), new Game("Space Invaders", 7)];
  constructor(private _balanceService: BalanceService) {
  }

  ngOnInit(): void {
  }

  submit(formItems: any) {
    console.log(formItems)
    if (formItems.value.tokenTransactionType == this.transactionType.BUY) {
      let transaction = new Transaction(this.model.description, this.model.noOfTokens, this.model.transactionType, {} as Game)
      this._balanceService.addToTransactions(transaction)
    } else if (formItems.value.tokenTransactionType == this.transactionType.SPEND && !this._balanceService.isInValidTransaction(this.model.game.tokens)) {
      let transaction = new Transaction(this.model.game.name, this.model.game?.tokens, this.model.transactionType, this.model.game)
      this._balanceService.addToTransactions(transaction)
    }

  }

}
