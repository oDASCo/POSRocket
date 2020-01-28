import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reporting-page',
  templateUrl: './reporting-page.component.html',
  styleUrls: ['./reporting-page.component.scss']
})
export class ReportingPageComponent implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['/report/linear']);
  }

}
