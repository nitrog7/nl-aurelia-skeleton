import {computedFrom} from 'aurelia-framework';
import falcor from 'falcor/dist/falcor.browser.min';

export class Welcome {
  heading = 'NL Aurelia Falcor Skeleton';
  firstName = 'John';
  lastName = 'Doe';
  previousValue = this.fullName;

  constructor() {
    // Create Falcor model
    let model = new falcor.Model({source: new falcor.HttpDataSource('/model.json')});

    this.hello = '';

    // Retrieve the "hello" key from the root of the Virtual JSON resource
    model.get('hello')
      .then((res) => {
        this.hello = res.json.hello;
      });
  }

  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  @computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  canDeactivate() {
    if(this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
