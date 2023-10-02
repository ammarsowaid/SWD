import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WidgetCoreCardAComponent} from './widget-core-card-a/widget-core-card-a.component';
import {
    ColComponent,
    GridModule,
    RowComponent,
    UtilitiesModule,
    WidgetModule,
    WidgetStatEComponent,
} from "@coreui/angular-pro";
import {ChartjsComponent, ChartjsModule} from '@coreui/angular-chartjs';


@NgModule({
    declarations: [
        WidgetCoreCardAComponent
    ],
    imports: [
        CommonModule,
        GridModule,
        ChartjsModule,
        ChartjsComponent,
        WidgetModule,
        UtilitiesModule,
        WidgetStatEComponent
    ],
    exports: [
        WidgetCoreCardAComponent
    ]

})
export class WidgetCoreModule {
}
