import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
    AvatarModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule, DropdownModule,
    FormModule,
    GridModule,
    NavModule,
    ProgressModule, SharedModule, SpinnerModule,
    TableModule,
    TabsModule, UtilitiesModule, WidgetModule
} from "@coreui/angular-pro";
import { IconModule } from '@coreui/icons-angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import {TranslateModule} from "@ngx-translate/core";
import {DynamicViewModule} from "../dynamic-view/dynamic-view.module";
import {BaseFilterModule} from "../base-filter/base-filter.module";

@NgModule({
  imports: [
    DashboardRoutingModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    AvatarModule,
    TableModule,
    TranslateModule,
    WidgetModule,
    DropdownModule,
    SharedModule,
    UtilitiesModule,
    SpinnerModule,
    DynamicViewModule,
    BaseFilterModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
