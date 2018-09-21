import { Component } from '@angular/core';

@Component({
  selector: 'page-list',
  templateUrl: 'detail.html'
})
export class DetailsPage {
  message: any;

  constructor() {
    this.message = 'hey detail'
  }

}
