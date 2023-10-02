import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicViewDirective} from "./dynamic-view.directive";
import {DynamicViewService} from "./dynamic-view.service";
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';



@NgModule({
  declarations: [
    DynamicViewDirective,
    DynamicTemplateComponent

  ],
  providers: [DynamicViewService],
  exports: [
    DynamicTemplateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DynamicViewModule { }
