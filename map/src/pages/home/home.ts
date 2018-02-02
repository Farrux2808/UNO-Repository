import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { NewsPage } from './../news/news';
import { TimeTablePage } from './../time-table/time-table'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
 
  constructor(public navCtrl: NavController, private toastCtrl :ToastController) {
    
  }
  
  goToNewsPage(){
    this.navCtrl.push(NewsPage);
  }
  
  goToTimeTablePage() {
    this.navCtrl.push(TimeTablePage);
  }
}
