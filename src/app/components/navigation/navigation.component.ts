import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../../globals';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  globals: Globals;

  constructor(globals: Globals, private router: Router) {
    this.globals = globals;
  }

  logOut() {
    this.globals.onAuth()
    this.router.navigateByUrl('/login');
  }
}
