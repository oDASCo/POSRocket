import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '../app-routing.module';

import {HttpClientModule} from "@angular/common/http";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {DateformatPipe} from "./date.pipe";


@NgModule({
    declarations: [
        SidebarComponent,
        DateformatPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    exports: [
        SidebarComponent,
        DateformatPipe
    ],
    providers: []
})
export class SharedModule {
}
