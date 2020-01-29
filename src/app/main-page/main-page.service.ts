import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable()
export class MainPageService {
    constructor(
        public http: HttpClient
    ) {}


    public getInfoList(): Observable<any> {
        return this.http.get(`${environment.api.url}`);
    }
}
