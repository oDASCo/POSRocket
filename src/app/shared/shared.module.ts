import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '../app-routing.module';

import {HttpClientModule} from "@angular/common/http";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {DateformatPipe} from "./pipes/date.pipe";
import {CurrencyBackPipe} from "./pipes/currencyBack.pipe";


@NgModule({
    declarations: [
        SidebarComponent,
        DateformatPipe,
        CurrencyBackPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    exports: [
        SidebarComponent,
        DateformatPipe,
        CurrencyBackPipe
    ],
    providers: []
})
export class SharedModule {
}
