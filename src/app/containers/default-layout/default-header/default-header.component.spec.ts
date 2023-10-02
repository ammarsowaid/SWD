import {ComponentFixture, TestBed} from '@angular/core/testing';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule, ButtonGroupModule,
  DropdownModule, FormModule,
  GridModule,
  HeaderModule,
  NavModule, SidebarModule
} from "@coreui/angular-pro";
import {IconModule, IconSetService} from '@coreui/icons-angular';

import {DefaultHeaderComponent} from './default-header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";

describe('DefaultHeaderComponent', () => {
  let component: DefaultHeaderComponent;
  let fixture: ComponentFixture<DefaultHeaderComponent>;
  let iconSetService: IconSetService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultHeaderComponent],
      imports: [GridModule, HeaderModule, NavModule
        , BadgeModule,
        AvatarModule,
        DropdownModule,
        ButtonGroupModule,
        ReactiveFormsModule,
        IconModule,
        TranslateModule.forRoot(),
        BreadcrumbModule, RouterTestingModule, SidebarModule],
      providers: [IconSetService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);

    fixture = TestBed.createComponent(DefaultHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
