import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'detail.html'
})
export class DetailsPage {
	img: string;
  	description: any;
  	content: any;

  	constructor(public navParams: NavParams) {
	  	let myValue = this.navParams.get('myValue');
	  	this.img = myValue.urlToImage;
	    this.description = myValue.description;
	    this.content = myValue.content;
	}

}
