import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesReportsRoutingModule } from './sales-reports-routing.module';
import { SalesByCustomersComponent } from './sales-by-customers/sales-by-customers.component';
import {BaseFilterModule} from "../base-filter/base-filter.module";


@NgModule({
  declarations: [
    SalesByCustomersComponent
  ],
  imports: [
    CommonModule,
    SalesReportsRoutingModule,
    BaseFilterModule
  ]
})
export class SalesReportsModule { }
