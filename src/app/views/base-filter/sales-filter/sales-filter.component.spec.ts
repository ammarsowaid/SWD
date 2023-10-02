import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesFilterComponent } from './sales-filter.component';

describe('SalesFilterComponent', () => {
  let component: SalesFilterComponent;
  let fixture: ComponentFixture<SalesFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesFilterComponent]
    });
    fixture = TestBed.createComponent(SalesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
