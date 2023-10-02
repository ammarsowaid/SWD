import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCoreCardAComponent } from './widget-core-card-a.component';

describe('WidgetCoreCardAComponent', () => {
  let component: WidgetCoreCardAComponent;
  let fixture: ComponentFixture<WidgetCoreCardAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetCoreCardAComponent]
    });
    fixture = TestBed.createComponent(WidgetCoreCardAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
