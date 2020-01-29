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


  ngOnInit() {
    this.pieChartData = this.reportingPageService.pieChartData;
  }



}
