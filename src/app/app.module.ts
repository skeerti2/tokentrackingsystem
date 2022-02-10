import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TokenTransactionFormComponent } from './token-transaction-form/token-transaction-form.component';
import { BalanceService } from './services/balance.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TokenTransactionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BalanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
