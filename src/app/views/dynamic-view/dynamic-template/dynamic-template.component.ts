import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DynamicItem} from "../dynamic-item";
import {DynamicViewDirective} from "../dynamic-view.directive";
import {DynamicViewComponent} from "../dynamic-view.component";

@Component({
    selector: 'app-dynamic-template',
    templateUrl: './dynamic-template.component.html',
    styleUrls: ['./dynamic-template.component.scss']
})
export class DynamicTemplateComponent implements OnInit, AfterViewInit {

    @Input() dynView: DynamicItem[] = [];

    @ViewChild(DynamicViewDirective, {static: true}) appDynamicView!: DynamicViewDirective;

    constructor(private renderer: Renderer2, private el: ElementRef) {
    }

    ngAfterViewInit(): void {
        this.loadComponent()

    }

    ngOnInit(): void {

    }


    loadComponent() {
        for (let i = 0; i < this.dynView.length; i++) {
            const dynItem = this.dynView[i];
            const componentRef = this.appDynamicView.viewContainerRef.createComponent<DynamicViewComponent>(dynItem.component);
            componentRef.instance.data = dynItem.data;
            componentRef.instance.type = dynItem.type;
        }


    }


}
