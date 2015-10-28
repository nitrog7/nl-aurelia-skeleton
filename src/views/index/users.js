'use strict';

import {inject} from 'aurelia-framework';
import 'fetch';

export class Users {
  heading = 'Github Users';
  users = [];

  constructor() {
  }

  activate() {
    return fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(users => this.users = users);
  }
}
