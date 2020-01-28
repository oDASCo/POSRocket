import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '../app-routing.module';

import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from '@angular/material/table';
import {MainPageComponent} from "./main-page.component";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

@NgModule({
    declarations: [
        MainPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: []
})
export class MainPageModule {
}
