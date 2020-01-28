import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportingPageComponent} from "./reporting-page/reporting-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {LinearChartComponent} from "./reporting-page/linear-chart/linear-chart.component";
import {PieChartComponent} from "./reporting-page/pie-chart/pie-chart.component";


const routes: Routes = [
    {path: '', component: ReportingPageComponent},
    {path: 'report', component: ReportingPageComponent, children: [
            {path: 'linear', component: LinearChartComponent},
            {path: 'pie', component: PieChartComponent}
        ]},
    {path: 'main', component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
