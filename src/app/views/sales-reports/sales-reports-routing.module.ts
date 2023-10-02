import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SalesByCustomersComponent} from "./sales-by-customers/sales-by-customers.component";

const routes: Routes = [
  // rptSales/
  {
    path: 'byCst',
    component: SalesByCustomersComponent,
    title: 'byCst',
    data: {title: 'byCst'}
  },

 /* {
    path: 'publicPrm',
    component: PublicParametersComponent,
    title: 'publicPrm',
    data: {title: 'publicPrm'}
  },*/

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesReportsRoutingModule { }
