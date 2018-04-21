import { DashboardPage } from './../dashboard/dashboard';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, MenuController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";

/**
 * Generated class for the LoginModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-modal',
  templateUrl: 'login-modal.html',
})
export class LoginModalPage {
  user_email: string;
  user_password: string;
  showButton: boolean;
  showSpinner: boolean;
  showLabel: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl : ViewController,
    public auth: AuthProvider,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController
  ) {
    this.showButton = true;
    this.showSpinner = false;
    this.showLabel = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginModalPage');
  }
  public closeModal(){
    this.viewCtrl.dismiss();
  }

  async loginEmail(){

      this.showButton = false;
      this.showSpinner = true;
      this.showLabel=false;
      // TODO: Add validation logic here
      console.log(this.user_email);
      console.log(this.user_password);

try{
    // await this.auth.anonymousLogin();
      await this.auth.emailLogin(this.user_email, this.user_password);

      // loader.dismiss()
      await this.navCtrl.setRoot(DashboardPage);
      // this.menuCtrl.swipeEnable(true);
    }
    catch (e){
      console.log("Error");
      this.showSpinner=false;
      this.showLabel = true;
      this.showButton=true;

    }
    // await th

    }






}
