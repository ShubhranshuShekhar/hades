import { CommonModule } from '@angular/common';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { AuthProvider } from "../../providers/auth/auth";
import { DatabaseProvider } from '../../providers/database/database';
// import { auth } from "firebase/app";


@IonicPage()
@Component({
  selector: 'page-attendacne-teacher',
  templateUrl: 'attendacne-teacher.html',
})
export class AttendacneTeacherPage {
  teacher_standard: String;
  @ViewChild(Slides) slides: Slides;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    private db: DatabaseProvider,

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendacneTeacherPage');
    var val: any;
    var list = this.db.getNameList();
    list.ref.get().then(function(doc){
      if (doc.exists){
        val = doc.data;
      console.log(doc.data());
    }
    else{
      console.log("No such doc!!");
    }
  }
  )

  // console.log(val.hello);



  this.auth.getCurrentUser().then(user => {
    console.log("***************************");
    console.log(user.standard.id);
    console.log(user.standard.name);
    this.teacher_standard = user.standard.name;
  });


}

ngAfterViewInit() {
  this.slides.pager = true;
}
}
