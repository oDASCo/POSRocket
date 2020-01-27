import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ReportingPageService {
    constructor(
        public http: HttpClient
    ) {}

    public getInfoList(): Observable<any> {
        return this.http.get(`https://tasktest.free.beeceptor.com/my/api/path`);
    }
}
