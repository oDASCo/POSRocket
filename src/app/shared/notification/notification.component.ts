import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

    @Output() btnAction: EventEmitter<any> = new EventEmitter<any>();

    public closeNotif() {
        this.btnAction.emit();
    }
}
