import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceDisplayBoardComponent } from './balance-display-board.component';

describe('BalanceDisplayBoardComponent', () => {
  let component: BalanceDisplayBoardComponent;
  let fixture: ComponentFixture<BalanceDisplayBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceDisplayBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceDisplayBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
