import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import {IClient} from "../shared/interfaces/Client.interface";

@Injectable()
export class MainPageService {
    constructor(
        public http: HttpClient
    ) {}

    public currentClient: IClient;
    public loading = true;


    public getInfoList(): Observable<any> {
        return this.http.get(`${environment.api.url}`);
    }
}
