import { Component, OnInit } from '@angular/core';
import { TOKEN_VALUE } from '../constants/constants';
import { TransactionType } from '../constants/transaction-type';

import { Transaction } from '../model/transaction.model';
import { BalanceService } from '../services/balance.service';

@Component({
  selector: 'app-ledger-display',
  templateUrl: './ledger-display.component.html',
  styleUrls: ['./ledger-display.component.css']
})
export class LedgerDisplayComponent implements OnInit {
  private transactionsArray: Transaction[]
  transactionTypeEnum = TransactionType;
  constructor(private _balanceService: BalanceService) {
    this.transactionsArray = []
  }

  getTokenAmount() {
    return TOKEN_VALUE;
  }

  ngOnInit(): void {
    this.transactionsArray = this._balanceService.getTransactionList();
  }

  getTransactionHistory() {
    return this.transactionsArray;
  }

}
