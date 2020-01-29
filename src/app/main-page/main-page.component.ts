import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MainPageService} from "./main-page.service";

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})


export class MainPageComponent implements OnInit {

    public clients;
    public allClients = [];
    public checked = false;
    public activeClients = [];
    public displayedColumns: string[] = ['index', 'picture', 'name', 'tags', 'friends', 'registered', 'phone', 'isActive'];

    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(
        private mainPageService: MainPageService
    ) {
    }

    ngOnInit() {
        this.mainPageService.getInfoList().subscribe(data => {
            data.forEach(item => {
                item.tags = item.tags.join(" ");
            });
            console.log(data);
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

    applyFilter(filterValue: string) {
        // console.log(filterValue);
        // console.log(this.clients);
        // let arrayForFindTags = [];
        //
        // this.allClients.forEach(item => {
        //     arrayForFindTags.push({
        //         id: item._id,
        //         tags: item.tags
        //     });
        // });
        //
        // let idArray = [];
        // idArray = arrayForFindTags.filter(item => {
        //     return item.tags.join(' ').startsWith(filterValue);
        // });
        // console.log(idArray);
        // let result = [];
        //
        // idArray.forEach(a => {
        //     console.log(a);
        //     result = this.allClients.filter(item => item._id === a.id);
        // });
        // console.log(result);
        // this.clients = new MatTableDataSource(result);
        // this.clients.sort = this.sort;
        // this.clients.paginator = this.paginator;


        this.clients.filter = filterValue.trim().toLowerCase();
    }
}
