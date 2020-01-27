import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './../app-routing.module';
import {ReportingPageComponent} from './reporting-page.component';

import {ReportingPageService} from "./reporting-page.service";

import {HttpClientModule} from "@angular/common/http";
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        ReportingPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ChartsModule
    ],
    providers: [ReportingPageService]
})
export class ReportingPageModule {
}
