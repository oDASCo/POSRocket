import { Component, OnInit } from '@angular/core';
import {ReportingPageService} from "../reporting-page.service";

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.scss']
})
export class LinearChartComponent implements OnInit {

  constructor(
      private reportingPageService: ReportingPageService
  ) { }

  public clients: Array<any>;
  private balancesForChart = [];
  public checked = false;


  public lineChartData = [
    { data: [], label: 'Balance' }
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

  private balances = [];


  ngOnInit() {
    // this.getData();
  }

  public toggleActive() {
    this.checked = !this.checked;
  }


  private compareBalance(a, b) {
    if ( a.balance < b.balance ){
      return -1;
    }
    if ( a.balance > b.balance ){
      return 1;
    }
    return 0;
  }

  public getData() {
    this.reportingPageService.getInfoList().subscribe( (data) => {
          this.clients = data;
          this.clients.map(item => {
            this.balances.push({
              balance: +item.balance.replace('$', '').replace(',', ''),
              name: item.name
            });
          });
          this.balances.sort(this.compareBalance);
          this.balancesForChart = this.balances.reverse().slice(0, 10);
          let balanceNames = [];
          let balances = [];
          this.balancesForChart.forEach(item => {
            balanceNames.push(item.name);
            balances.push(item.balance);
          });
          this.lineChartData = [
            { data: balances, label: 'Balance' }
          ];
          this.lineChartLabels = balanceNames;
        }
    );
  }
}
