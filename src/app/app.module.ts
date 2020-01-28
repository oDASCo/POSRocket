import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ReportingPageModule} from './reporting-page/reporting-page.module'
import {SharedModule} from "./shared/shared.module";
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReportingPageModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
