import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {MainPageService} from "../main-page.service";
import {IClient} from "../../shared/interfaces/Client.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  public editMode;
  public form: FormGroup;


  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      balance: new FormControl(),
      company: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormControl(),
      registered: new FormControl(),
      greeting: new FormControl(),
      favoriteFruit: new FormControl(),
      tags: new FormControl(),
      friends: new FormControl()
    });
    this.route.params.subscribe((params: Params) => {
      this.mainPageService.getInfoList().subscribe(data => {
        this.client = data.filter(item => item._id === params.id)[0];
        this.form = new FormGroup({
          name: new FormControl(this.client.name, [
            Validators.required
          ]),
          age: new FormControl(this.client.age, [
            Validators.required
          ]),
          gender: new FormControl(this.client.gender, [
            Validators.required
          ]),
          balance: new FormControl(this.client.balance, [
            Validators.required
          ]),
          company: new FormControl(this.client.company),
          email: new FormControl(this.client.email),
          phone: new FormControl(this.client.phone),
          address: new FormControl(this.client.address),
          registered: new FormControl(this.client.registered),
          greeting: new FormControl(this.client.greeting),
          favoriteFruit: new FormControl(this.client.favoriteFruit),
          tags: new FormControl(this.client.tags),
          friends: new FormControl(this.client.friends),
        });
      });
    });

  }

  public openEditMode() {
    this.editMode  = true;
  }

  public closeEditMode() {
    this.editMode  = false;
  }

  public onSubmit () {
    if (this.form.valid) {
      let generalInfo = {
        name: this.form.value.name,
        age: +this.form.value.age,
        gender: this.form.value.gender,
        balance: this.form.value.balance,
        company: this.form.value.company,
        email: this.form.value.email,
        phone: this.form.value.phone,
        address: this.form.value.address,
        registered: this.form.value.registered,
        greeting: this.form.value.greeting,
        favoriteFruit: this.form.value.favoriteFruit,
        tags: this.form.value.tags,
        friends: this.form.value.friends
      };
      this.client = generalInfo;
      console.log(generalInfo);
      this.closeEditMode();
    } else {
      console.log('invalid');
    }

  }
}
