import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SalesFilterComponent} from './sales-filter/sales-filter.component';
import {
  ButtonGroupComponent,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule, DateRangePickerComponent,
  FormDirective,
  FormModule,
  GridModule,
  LoadingButtonModule,
  ModalBodyComponent,
  ModalComponent,
  ModalHeaderComponent,
  ModalModule,
  MultiSelectComponent,
  PlaceholderModule,
  SpinnerModule,
  ToastModule,
  UtilitiesModule
} from "@coreui/angular-pro";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IconModule} from "@coreui/icons-angular";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    SalesFilterComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    TranslateModule,
    CarouselModule,
    RouterModule,
    UtilitiesModule,
    GridModule,
    SpinnerModule,
    FormModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    IconModule,
    FormsModule,
    PlaceholderModule,
    ToastModule,
    LoadingButtonModule,
    MultiSelectComponent,
    ButtonGroupComponent,
    DateRangePickerComponent

  ],
  exports: [
    SalesFilterComponent
  ]
})
export class BaseFilterModule {
}
