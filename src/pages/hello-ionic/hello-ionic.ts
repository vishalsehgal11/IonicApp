import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ModalController } from 'ionic-angular';
import { DetailsPage } from '../detail/detail';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
	newsData: any;
	page: string;
	newsSource: any;

  	constructor(public http: HttpClient, public modalCtrl: ModalController, public navParams: NavParams) {
  		this.page = this.navParams.get('pageData') || 'Top Headlines';
  		this.fetchUrl();
  	}

  	fetchUrl() {
  		let newsParams = '', apiUrl = '';
		if (this.page==='Top Headlines') { 
	    	newsParams = 'country=in';
	   	} else if (this.page==='World News') {
			newsParams = 'sources=google-news';
		} else if (this.page==='Sports News') { 
	    	newsParams = ['sources=espn', 'sources=talksport'];  
	   	} else if (this.page==='Technology News') { 
	    	newsParams = 'sources=techcrunch';  
	   	} else if (this.page==='India News') { 
	    	newsParams = 'sources=google-news-in';  
	   	} else if (this.page==='Google News') { 
	    	newsParams = 'sources=google-news'; 
	   	} else if (this.page==='Financial News') { 
	   		newsParams = 'sources=financial-times';
	   	} else {
	      	apiUrl = 'country=in'; 
	   	}
	   	if(typeof newsParams == 'string') {
	   		apiUrl = 'https://newsapi.org/v2/top-headlines?'+newsParams+'&apiKey=dc1ba9d18765494e892e2bc09b0522ca';
	   		this.fetchNews(apiUrl);
  		} else { 
  			for (let source of newsParams) {
  				apiUrl = 'https://newsapi.org/v2/top-headlines?'+source+'&apiKey=dc1ba9d18765494e892e2bc09b0522ca';
  				this.fetchNews(apiUrl);
  			}
  		}
  	}

  	fetchNews(url) {
	  	return new Promise(resolve => {
	    	this.http.get(url).subscribe(data => {
	    		this.newsData = data;
	      		resolve(data);
	   		}, err => {
	      		console.log(err);
	    	});
	  	});
	}

	presentModal(arg) {
    	const modal = this.modalCtrl.create(DetailsPage, {
    		myValue: arg
    	});
    	modal.present();
  	}

}
