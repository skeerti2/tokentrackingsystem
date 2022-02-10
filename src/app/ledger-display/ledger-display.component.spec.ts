import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerDisplayComponent } from './ledger-display.component';

describe('LedgerDisplayComponent', () => {
  let component: LedgerDisplayComponent;
  let fixture: ComponentFixture<LedgerDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
