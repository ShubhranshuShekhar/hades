import { EmailLoginComponent } from './../../components/email-login/email-login';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginSliderPage } from './login-slider';

@NgModule({
  declarations: [
    LoginSliderPage,
    EmailLoginComponent
  ],
  imports: [
    IonicPageModule.forChild(LoginSliderPage),
  ],
})
export class LoginSliderPageModule {}
