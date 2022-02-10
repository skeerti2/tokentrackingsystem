import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenTransactionFormComponent } from './token-transaction-form.component';

describe('TokenTransactionFormComponent', () => {
  let component: TokenTransactionFormComponent;
  let fixture: ComponentFixture<TokenTransactionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenTransactionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenTransactionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
