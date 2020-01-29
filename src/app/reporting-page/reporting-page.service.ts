import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable()
export class ReportingPageService {
    constructor(
        public http: HttpClient
    ) {
    }

    public clients: Array<any>;
    private males = [];
    private females = [];
    public balancesForChart = [];
    public checked = false;
    private activeBalances = [];
    private balances = [];


    public pieChartData = [0, 0];
    public lineChartLabels = [];


    public lineChartData = [
        {data: [], label: 'Balance'}
    ];

    public getInfoList(): Observable<any> {
        return this.http.get(`${environment.api.url}`);
    }

    public getData() {
        this.getInfoList().subscribe((data) => {
                this.clients = data;
                this.males = this.clients.filter(item => item.gender === 'male');
                this.females = this.clients.filter(item => item.gender === 'female');
                this.pieChartData = [this.females.length, this.males.length];

                this.clients.map(item => {
                    this.balances.push({
                        balance: +item.balance.replace('$', '').replace(',', ''),
                        name: item.name,
                        isActive: item.isActive
                    });
                });
                this.activeBalances = this.balances.filter(item => item.isActive);
                this.balances.sort(this.compareBalance);
                this.activeBalances.sort(this.compareBalance);
                this.balancesForChart = this.balances.reverse().slice(0, 10);
                this.activeBalances = this.activeBalances.reverse();
                this.setBalanceDataForChart();
            }
        );
    }


    private compareBalance(a, b) {
        if (a.balance < b.balance) {
            return -1;
        }
        if (a.balance > b.balance) {
            return 1;
        }
        return 0;
    }


    private setBalanceDataForChart() {
        let balanceNames = [];
        let balances = [];
        this.balancesForChart.forEach(item => {
            balanceNames.push(item.name);
            balances.push(item.balance);
        });
        this.lineChartData = [
            {data: balances, label: 'Balance'}
        ];
        this.lineChartLabels = balanceNames;
    }

    public toggleActive(check) {
        if (check) {
            this.balancesForChart = this.activeBalances.slice(0, 10);
            this.setBalanceDataForChart();
        } else {
            this.balancesForChart = this.balances.slice(0, 10);
            this.setBalanceDataForChart();
        }
    }
}
