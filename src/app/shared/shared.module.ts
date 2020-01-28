import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '../app-routing.module';

import {HttpClientModule} from "@angular/common/http";
import {SidebarComponent} from "./sidebar/sidebar.component";


@NgModule({
    declarations: [
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    exports: [
        SidebarComponent
    ],
    providers: []
})
export class SharedModule {
}
