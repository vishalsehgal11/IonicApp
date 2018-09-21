import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ModalController } from 'ionic-angular';
import { DetailsPage } from '../detail/detail';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
	newsData: any;
  	constructor(public http: HttpClient, public modalCtrl: ModalController) {
  		this.fetchData();
  	}

  	fetchData() {
  		let apiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=dc1ba9d18765494e892e2bc09b0522ca';
	  return new Promise(resolve => {
	    this.http.get(apiUrl).subscribe(data => {
	    this.newsData = data;
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}

	presentModal() {
    	const modal = this.modalCtrl.create(DetailsPage);
    	modal.present();
  	}

}
