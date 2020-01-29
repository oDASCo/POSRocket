import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MainPageService} from "./main-page.service";
import {IClients} from "../shared/interfaces/Client.interface";

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})


export class MainPageComponent implements OnInit {

    public clients: any;
    public allClients:  IClients = [];
    public checked = false;
    public activeClients: IClients = [];
    public displayedColumns: string[] = ['index', 'picture', 'name', 'tags', 'friends', 'registered', 'phone', 'isActive'];

    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(
        private mainPageService: MainPageService
    ) {
    }

    ngOnInit() {
        this.mainPageService.getInfoList().subscribe((data: IClients) => {
            data.forEach(item => {
                item.tags = item.tags.join(" ");
            });
            this.allClients = data;
            this.clients = new MatTableDataSource(data);
            this.clients.sort = this.sort;
            this.clients.paginator = this.paginator;
            this.activeClients = this.allClients.filter(item => item.isActive);
        });

    }

    public toggleActive() {
        this.checked = !this.checked;
        if (this.checked) {
            this.clients = new MatTableDataSource(this.activeClients);
            this.clients.sort = this.sort;
            this.clients.paginator = this.paginator;
        } else {
            this.clients = new MatTableDataSource(this.allClients);
            this.clients.sort = this.sort;
            this.clients.paginator = this.paginator;
        }
    }

    public goToClientPage(client) {
        this.mainPageService.currentClient = client;
    }

    public applyFilter(filterValue: string) {
        this.clients.filter = filterValue.trim().toLowerCase();
    }
}
