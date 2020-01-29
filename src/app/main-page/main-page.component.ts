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
    public filterStr: string = "";
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
        this.mainPageService.getInfoList().subscribe(data => {
            data.forEach(item => {
                item.tagsArr = item.tags;
                item.tags = item.tags.join(" ");
                let friendsStr = "";
                item.friendsArr = item.friends;
                item.friends.forEach(friend =>{
                    friendsStr += friend.name + " "
                });
                item.friends = friendsStr;
            });
            this.allClients = data;
            this.clients = new MatTableDataSource(data);
            this.clients.sort = this.sort;
            this.clients.paginator = this.paginator;
            this.activeClients = this.allClients.filter(item => item.isActive);
            this.clients.filterPredicate = (dataB: Element, filter: string) => {
                let name = dataB.name.toLowerCase();
                let tags = dataB.tags.toLowerCase();
                let phone = dataB.phone.toLowerCase();
                let friends = dataB.friends.toLowerCase();
                return name.indexOf(filter) !== -1 || tags.indexOf(filter) !== -1 || phone.indexOf(filter) !== -1 || friends.indexOf(filter) !== -1;
            };
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

    public searchBy(filterParam){
        this.filterStr = filterParam;
        this.applyFilter(filterParam);
    }
}
