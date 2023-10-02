import {Component, Input, OnInit} from '@angular/core';
import {DynamicViewComponent} from "../../dynamic-view/dynamic-view.component";

@Component({
    selector: 'app-widget-core-card-a',
    templateUrl: './widget-core-card-a.component.html',
    styleUrls: ['./widget-core-card-a.component.scss']
})
export class WidgetCoreCardAComponent implements DynamicViewComponent, OnInit {
    @Input() data!: any | undefined;
    @Input() type!: string | 'Default';

    barOptions = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        }
    };
    lineOptions = {
        maintainAspectRatio: false,
        elements: {
            line: {
                tension: 0.4
            },
            point: {
                radius: 0
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        }
    };
    dataBarChart: any;
    dataLineChart: any;

    ngOnInit(): void {
        this.dataBarChart = {
            labels: this.data.labels,
            datasets: [
                {
                    backgroundColor: '#ffffff',
                    borderColor: 'transparent',
                    borderWidth: 1,
                    data: []
                }
            ]
        };
        this.dataLineChart = {
            labels: this.data.labels,
            datasets: [
                {
                    backgroundColor: 'transparent',
                    borderColor: '#321fdb',
                    borderWidth: 2,
                    data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
                    pointBackgroundColor: '#321fdb'
                }
            ]
        };
this.initView()
    }
    initView():void{

        const json = {
          "div":{
            "c-col": {
              "[xs]": "12",
              "[lg]": "6",
              "c-widget-stat-e": {
                "[title]": "data.title",
                "[value]": "data.value",
                "class": "mb-4",
                "c-chart": {
                  "[data]": "dataBarChart",
                  "[options]": "barOptions",
                  "class": "mx-auto",
                  "height": "40",
                  "width": "80"
                }
              }
            }
          }
        };

        const jsonString = JSON.stringify(json);
        const divElement = document.createElement('div');
        divElement.innerHTML = jsonString;
        document.body.appendChild(divElement);
    }
}

