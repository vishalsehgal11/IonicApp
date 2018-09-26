import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;
  newsCategories: Array;
  newsSources: Array;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    this.newsCategories = ['Top Headlines', 'World News', 'Sports News', 'India News', 'Google News'];
    this.initializeSources();
    
  }

  initializeSources() {
    this.newsSources = ['ABC News', 'Al Jazeera', 'Australian Financial Review', 'BBC News', 'BBC Sport',
      'Bild', 'Blasting News (BR)', 'Bloomberg', 'Business Insider', 'Buzzfeed', 'CBC News', 'CNBC', 'CNN', 
      'Daily Mail', 'Entertainment Weekly', 'ESPN', 'ESPN Cric Info', 'Financial Post', 'Financial Times',
      'Fortune', 'Fox News', 'Google News', 'Hacker News', 'Independent', 'InfoMoney', 'Medical News Today',
      'Mirror', 'MSNBC', 'National Geographic', 'New York Magazine', 'Reuters', 'TechCrunch (CN)', 'TechRadar',
      'The Economist', 'The Hindu', 'The Huffington Post', 'The New York Times', 'the-telegraph', 'The Times of India',
      'The Wall Street Journal', 'The Washington Post', 'The Washington Times', 'Time', 'USA Today'];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
      this.menu.open();
    });
  }

  loadNews(title, i) {
    this.menu.close();
    this.nav.setRoot(HelloIonicPage, {'index': i, 'title': title});
  }

  getItems(ev: any) {
    this.initializeSources();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.newsSources = this.newsSources.filter((source) => {
        return (source.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
