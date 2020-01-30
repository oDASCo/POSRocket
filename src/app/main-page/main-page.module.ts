import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '../app-routing.module';

import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from '@angular/material/table';
import {MainPageComponent} from "./main-page.component";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatSlideToggleModule} from '@angular/material';
import {MainPageService} from "./main-page.service";
import {SharedModule} from "../shared/shared.module";
import { ClientInfoComponent } from './client-info/client-info.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    declarations: [
        MainPageComponent,
        ClientInfoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule,
        MatSlideToggleModule,
        ReactiveFormsModule,
        MatSelectModule
    ],
    providers: [MainPageService]
})
export class MainPageModule {
}
