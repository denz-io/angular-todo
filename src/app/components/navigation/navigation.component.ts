import { Component, Input } from '@angular/core';
import { Globals } from '../../globals';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(public globals: Globals) {}
}
