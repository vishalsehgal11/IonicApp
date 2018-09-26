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
	title: string;
	newsIndex: number;
	newsSource: any;
	newsSources = ['google-news-in', 'google-news', 'espn', 'google-news-in', 'google-news', 'abc-news',
		'al-jazeera-english', 'australian-financial-review', 'bbc-news', 'bbc-sport', 'bild', 'blasting-news-br',
		'bloomberg','business-insider', 'buzzfeed', 'cbc-news', 'cnbc', 'cnn', 'daily-mail', 'entertainment-weekly',
		'espn', 'espn-cric-info', 'financial-post', 'financial-times', 'fortune', 'fox-news', 'google-news', 'hacker-news',
		'independent', 'info-money', 'medical-news-today', 'mirror', 'msnbc', 'national-geographic', 'new-york-magazine',
		'reuters', 'techcrunch-cn', 'techradar', 'the-economist', 'the-hindu', 'the-huffington-post', 'the-new-york-times',
		'The Telegraph', 'the-times-of-india', 'the-wall-street-journal', 'the-washington-post', 'the-washington-times', 
		'time', 'usa-today'];

  	constructor(public http: HttpClient, public modalCtrl: ModalController, public navParams: NavParams) {
  		this.newsIndex = this.navParams.get('index') || 0;
  		this.title = this.navParams.get('title') || 'Top Headlines';
  		this.fetchNews();
  	}

  	fetchNews() {
  		let apiUrl = '';
	   	apiUrl = 'https://newsapi.org/v2/top-headlines?sources='+this.newsSources[this.newsIndex]+'&apiKey=dc1ba9d18765494e892e2bc09b0522ca';
	  	return new Promise(resolve => {
	    	this.http.get(apiUrl).subscribe(data => {
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
