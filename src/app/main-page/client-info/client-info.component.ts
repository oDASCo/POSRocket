import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {MainPageService} from "../main-page.service";
import {IClient} from "../../shared/interfaces/Client.interface";

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private mainPageService: MainPageService
  ) { }

  public client: IClient;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.mainPageService.getInfoList().subscribe(data => {
        this.client = data.filter(item => item._id === params.id)[0];
        console.log(this.client);
      });
    });
  }

}
