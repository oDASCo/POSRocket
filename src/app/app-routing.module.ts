import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportingPageComponent} from "./reporting-page/reporting-page.component";
import {MainPageComponent} from "./main-page/main-page.component";


const routes: Routes = [
    {path: '', component: ReportingPageComponent},
    {path: 'report', component: ReportingPageComponent},
    {path: 'main', component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
