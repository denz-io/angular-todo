import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardPage {
  reminders = [];
  input = "";

  onKey(event: any) {
    this.input =  event.target.value;
  }

  addReminder() {
    if (this.input) {
      this.reminders = [...this.reminders, this.input];
    }
    this.input = "";
  }

  deleteReminder(index) {
    this.reminders =  this.reminders.filter((res, key) => key != index);
  }
}
