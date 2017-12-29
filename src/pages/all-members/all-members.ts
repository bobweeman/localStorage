import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the AllMembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-members',
  templateUrl: 'all-members.html',
})
export class AllMembersPage {
  members:any[]=[];
  constructor(private storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
    this.allMembers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllMembersPage');
  }

  allMembers(){
    this.storage.ready().then(()=>{
      this.storage.forEach((value)=>{
        this.members.push(value);
      })
    }).catch();
    console.log(this.members);
  }

}
