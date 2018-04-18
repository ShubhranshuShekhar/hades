import { UserPostsPage } from './../../pages/user-posts/user-posts';
import { Component } from "@angular/core";
import { AuthProvider } from "../../providers/auth/auth";
import { NavController } from "ionic-angular";
import { LoadingController, ModalController } from "ionic-angular";
import { TabsPage } from "../../pages/tabs/tabs";
import { LoginModalPage } from "../../pages/login-modal/login-modal";
/**
 * Generated class for the EmailLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "email-login",
  templateUrl: "email-login.html"
})
export class EmailLoginComponent {
  text: string;

  constructor(
    public auth: AuthProvider,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
  ) {
    // console.log("Hello EmailLoginComponent Component");
    // this.text = "Hello Email controller";
  }
  public openModal(){
    var data = { message : 'hello world' };
    var modalPage = this.modalCtrl.create('LoginModalPage');
    modalPage.present();
}

  async login() {

//     const loader = this.loadingCtrl.create({
//       content: "Loading sign in page"
//     });

//     loader.present()

//     // await this.auth.anonymousLogin();
//     await this.auth.emailLogin();
// // await this.auth.
//     loader.dismiss()
//     await this.navCtrl.setRoot(TabsPage)
//     // await this.navCtrl.setRoot(UserPostsPage)

  }
}
