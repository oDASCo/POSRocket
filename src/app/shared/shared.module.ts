import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '../app-routing.module';

import {HttpClientModule} from "@angular/common/http";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {DateformatPipe} from "./pipes/date.pipe";
import {CurrencyBackPipe} from "./pipes/currencyBack.pipe";
import {LoaderComponent} from "./loader/loader.component";
import { NotificationComponent } from './notification/notification.component';


@NgModule({
    declarations: [
        SidebarComponent,
        DateformatPipe,
        CurrencyBackPipe,
        LoaderComponent,
        NotificationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    exports: [
        SidebarComponent,
        DateformatPipe,
        CurrencyBackPipe,
        LoaderComponent,
        NotificationComponent
    ],
    providers: []
})
export class SharedModule {
}
