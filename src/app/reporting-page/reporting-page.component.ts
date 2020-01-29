import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ReportingPageService} from "./reporting-page.service";

@Component({
  selector: 'app-reporting-page',
  templateUrl: './reporting-page.component.html',
  styleUrls: ['./reporting-page.component.scss']
})
export class ReportingPageComponent implements OnInit {

  constructor(
      private router: Router,
      private reportingPageService: ReportingPageService
  ) { }

  ngOnInit() {
    this.router.navigate(['/report/linear']);
    this.reportingPageService.getData();
  }

}
