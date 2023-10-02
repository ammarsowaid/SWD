import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByCustomersComponent } from './sales-by-customers.component';

describe('SalesByCustomersComponent', () => {
  let component: SalesByCustomersComponent;
  let fixture: ComponentFixture<SalesByCustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesByCustomersComponent]
    });
    fixture = TestBed.createComponent(SalesByCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
