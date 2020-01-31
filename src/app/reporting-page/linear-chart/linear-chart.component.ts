import {Component, OnInit} from '@angular/core';
import {ReportingPageService} from "../reporting-page.service";

@Component({
    selector: 'app-linear-chart',
    templateUrl: './linear-chart.component.html',
    styleUrls: ['./linear-chart.component.scss']
})
export class LinearChartComponent implements OnInit {

    constructor(
        public reportingPageService: ReportingPageService
    ) {
    }

    public checked = false;
    public lineChartData = [
        {data: [], label: 'Balance'}
    ];
    public lineChartLabels = [];
    public lineChartOptions = {
        responsive: true,
        scales: {
            xAxes: [{}],
            yAxes: [
                {
                    id: 'y-axis-0',
                    position: 'left',
                },
                {
                    id: 'y-axis-1',
                    position: 'right',
                    gridLines: {
                        color: 'rgba(255,0,0,0.3)',
                    },
                    ticks: {
                        fontColor: 'red',
                    }
                }
            ]
        },
        annotation: {
            annotations: [
                {
                    type: 'line',
                    mode: 'vertical',
                    scaleID: 'x-axis-0',
                    value: 'March',
                    borderColor: 'orange',
                    borderWidth: 2,
                    label: {
                        enabled: true,
                        fontColor: 'orange',
                        content: 'LineAnno'
                    }
                },
            ],
        },
    };
    public lineChartColors = [
        {
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';

    ngOnInit() {
        this.lineChartData = this.reportingPageService.lineChartData;
        this.lineChartLabels = this.reportingPageService.lineChartLabels;
    }

    public toggleActive() {
        this.checked = !this.checked;
        this.reportingPageService.toggleActive(this.checked);
    }
}
