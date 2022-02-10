import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../services/balance.service';

@Component({
  selector: 'app-balance-display-board',
  templateUrl: './balance-display-board.component.html',
  styleUrls: ['./balance-display-board.component.css']
})
export class BalanceDisplayBoardComponent implements OnInit {
  private balance: number;
  constructor(private _balanceService: BalanceService) {
    this.balance = this._balanceService.getBalance()
   }

  ngOnInit(): void {
    
  }

  getBalance(){
    return this.balance;
  }

}
