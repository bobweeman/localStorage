import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  name:string;
  age:number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
      
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
    
  save(){
    let member={
      name:this.name,
      age:this.age
    }
    let id =this.magicNumbers();
    this.storage.set('sandwich'+id,member).then(()=>{
      alert("Datasaved");
    }).catch((error)=>{
      console.log(error);
    });
    this.name='';
    this.age=0;
  }

  magicNumbers(){
    return Math.floor(Math.random()*9999);
  }

  go(){
    this.navCtrl.push("AllMembersPage");
  }

}
