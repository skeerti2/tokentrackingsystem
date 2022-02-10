import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TokenTransactionFormComponent } from './token-transaction-form/token-transaction-form.component';
import { BalanceService } from './services/balance.service';
import { BalanceDisplayBoardComponent } from './balance-display-board/balance-display-board.component';
import { LedgerDisplayComponent } from './ledger-display/ledger-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TokenTransactionFormComponent,
    BalanceDisplayBoardComponent,
    LedgerDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [BalanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
