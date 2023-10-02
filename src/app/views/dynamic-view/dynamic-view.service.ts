import { Injectable } from '@angular/core';
import {DynamicItem} from "./dynamic-item";
import {WidgetCoreCardAComponent} from "../widget-core/widget-core-card-a/widget-core-card-a.component";

@Injectable({
  providedIn: 'root'
})
export class DynamicViewService {

  getDynView() {
    return [
      new DynamicItem(
          WidgetCoreCardAComponent,
          { title: 'Customers', value: '2,52321',labels:['Bar-1','Bar-2','Bar-3']},
          'WC-CRD-A-BAR'
      ),
      new DynamicItem(
          WidgetCoreCardAComponent,
          { title: 'Customers-Line', value: '9,98651',labels:['Line-1','Line-2','Line-3']},
          'WC-CRD-A-LINE'
      ),

    ];
  }
}
