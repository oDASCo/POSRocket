import { Component, OnInit } from '@angular/core';
import {ReportingPageService} from "../reporting-page.service";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor(
      private reportingPageService: ReportingPageService
  ) { }

  public pieChartLabels = ['Female', 'Male'];
  public pieChartData = [0, 0];
  public pieChartType = 'pie';

  public clients: Array<any>;
  private males = [];
  private females = [];


  ngOnInit() {
    this.getData();
  }


  public getData() {
    this.reportingPageService.getInfoList().subscribe( (data) => {
          this.clients = data;
          this.males = this.clients.filter(item => item.gender === 'male');
          this.females = this.clients.filter(item => item.gender === 'female');
          this.pieChartData = [this.females.length, this.males.length];
        }
    );
  }
}
