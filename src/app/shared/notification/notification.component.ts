import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor() { }
  @Output() btnAction: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }

  public closeNotif() {
    this.btnAction.emit();
  }

}
