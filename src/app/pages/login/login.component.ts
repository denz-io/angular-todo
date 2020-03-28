import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Globals }  from '../../globals'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginPage {
  globals: Globals;
  username = "";
  password = "";
  error = false;

  constructor(globals: Globals, private router: Router) {
    this.globals = globals;
  }

  onKey(event: any) {
    this[event.target.name] = event.target.value; 
  }
              
  submitForm() {
    if (this.username && this.password) {
      this.globals.onAuth()
      this.router.navigateByUrl('/dashboard');
    } else {
    }
  }
}
