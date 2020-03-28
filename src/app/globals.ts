import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  auth = false;
  onAuth() {
    this.auth = !this.auth;
  }
}
