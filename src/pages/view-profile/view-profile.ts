import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ViewProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
  displayname: string;
  user_id: string;
myUser: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
this.displayname = navParams.get("username")
console.log("++++++++++++++++++++++++++++");
this.myUser = auth.getCurrentUser().then(user=>{
 return user;
}).catch(err =>{
  console.log("Error");
  
});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewProfilePage');
    // return this.auth.getCurrentUser();
  console.log(this.myUser.displayname)  ;
  }

  ionViewCanEnter() {
    // return this.auth.isLoggedIn();
  }

}
