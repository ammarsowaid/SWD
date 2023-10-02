import {Component, OnInit} from '@angular/core';
import {DynamicItem} from "../dynamic-view/dynamic-item";
import {DynamicViewService} from "../dynamic-view/dynamic-view.service";

interface IUser {
    name: string;
    state: string;
    registered: string;
    country: string;
    usage: number;
    period: string;
    payment: string;
    activity: string;
    avatar: string;
    status: string;
    color: string;
}

@Component({
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    dynView: DynamicItem[] = []

    constructor(private dynViewService: DynamicViewService) {
    }

    ngOnInit(): void {
        this.dynView = this.dynViewService.getDynView()

    }

}
