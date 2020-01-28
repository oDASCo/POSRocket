import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './../app-routing.module';
import {ReportingPageComponent} from './reporting-page.component';

import {ReportingPageService} from "./reporting-page.service";

import {HttpClientModule} from "@angular/common/http";
import { ChartsModule } from 'ng2-charts';
import {SharedModule} from "../shared/shared.module";
import { LinearChartComponent } from './linear-chart/linear-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
    declarations: [
        ReportingPageComponent,
        LinearChartComponent,
        PieChartComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ChartsModule,
        SharedModule
    ],
    providers: [ReportingPageService]
})
export class ReportingPageModule {
}