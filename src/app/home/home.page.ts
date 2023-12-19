import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TimelinePage } from '../timeline/timeline.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private navCtrl: NavController) {}


  goToTimeline() {
    this.navCtrl.navigateForward('/timeline');
  }
  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }
}
