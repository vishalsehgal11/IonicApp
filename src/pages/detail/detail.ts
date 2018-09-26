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
  	data: any;

  	constructor(public navParams: NavParams) {
	  	this.data = this.navParams.get('myValue');
	  	this.img = this.data.urlToImage;
	    this.description = this.data.description;
	    this.content = this.data.content ? this.data.content.substring(0, this.data.content.length - 15) + '...' : '';
	}

	openUrl() {
		window.open(this.data.url, '_system');
	}

}
