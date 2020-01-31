import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {MainPageService} from "../main-page.service";
import {IClient} from "../../shared/interfaces/Client.interface";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-client-info',
    templateUrl: './client-info.component.html',
    styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private mainPageService: MainPageService
    ) {
    }

    public client: IClient;
    public editMode;
    public form: FormGroup;
    public genders = ['male', 'female'];
    public selected;
    public loading = true;
    public success = false;

    ngOnInit() {
        this.loading = true;
        this.formGroup();
        this.getDataByClientId();
    }

    public openEditMode() {
        this.editMode = true;
    }

    public closeEditMode() {
        this.editMode = false;
    }

    public onSubmit() {
        if (this.form.valid) {
            let generalInfo = {
                name: this.form.value.name,
                age: +this.form.value.age,
                gender: this.form.value.gender,
                balance: this.form.value.balance,
                company: this.form.value.company,
                email: this.form.value.email,
                phone: this.form.value.phone,
                address: this.form.value.address,
                registered: this.form.value.registered,
                greeting: this.form.value.greeting,
                favoriteFruit: this.form.value.favoriteFruit,
                tags: this.client.tags,
                friends: this.client.friends,
                isActive: !!this.form.value.company
            };
            this.client = generalInfo;
            this.closeEditMode();
            this.success = true;
        } else {
            console.log('invalid');
        }

    }

    public deleteTag(tag) {
        this.client.tags = this.client.tags.filter(item => item !== tag);
    }

    public deleteFriend(id) {
        this.client.friends = this.client.friends.filter(item => item.id !== id);
    }

    public addTag() {
        this.client.tags.push(this.form.value.tags);
        this.form.value.tags = '';
    }

    public addFriend() {
        if (this.client.friends.length < 3) {
            this.client.friends.push({
                name: this.form.value.friends,
                id: 6
            });
            this.form.value.friends = '';
        }
    }

    public closeNotif() {
        this.success = false;
    }

    private getDataByClientId() {
        this.route.params.subscribe((params: Params) => {
            this.mainPageService.getInfoList().subscribe(data => {
                this.loading = false;
                this.initFormWithClientData(params, data);
            });
        });
    }

    private initFormWithClientData(params, data) {
        this.client = data.filter(item => item._id === params.id)[0];
        this.selected = this.client.gender;
        this.form = new FormGroup({
            name: new FormControl(this.client.name, [
                Validators.required
            ]),
            age: new FormControl(this.client.age, [
                Validators.required, FixedValidator, PositiveValidator
            ]),
            gender: new FormControl(this.client.gender, [
                Validators.required
            ]),
            balance: new FormControl(this.client.balance, [
                Validators.required, PositiveValidator
            ]),
            company: new FormControl(this.client.company),
            email: new FormControl(this.client.email),
            phone: new FormControl(this.client.phone),
            address: new FormControl(this.client.address),
            registered: new FormControl(this.client.registered),
            greeting: new FormControl(this.client.greeting),
            favoriteFruit: new FormControl(this.client.favoriteFruit),
            tags: new FormControl(),
            friends: new FormControl(),
        });
        function PositiveValidator(control: AbstractControl): { [key: string]: boolean } | any {
            if (isNaN(+control.value) || control.value < 0) {
                return {'age': true};
            }
            return false;
        }

        function FixedValidator(control: AbstractControl): { [key: string]: boolean } | any {
            if (!Number.isInteger(+control.value)) {
                return {'age': true};
            } else if (Number.isInteger(+control.value)) {
                return false;
            }
            return null;
        }
    }

    private formGroup() {
        this.form = new FormGroup({
            name: new FormControl(),
            age: new FormControl(),
            gender: new FormControl(),
            balance: new FormControl(),
            company: new FormControl(),
            email: new FormControl(),
            phone: new FormControl(),
            address: new FormControl(),
            registered: new FormControl(),
            greeting: new FormControl(),
            favoriteFruit: new FormControl(),
            tags: new FormControl(),
            friends: new FormControl()
        });
    }
}
