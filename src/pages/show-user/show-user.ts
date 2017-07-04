import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersServiceProvider } from '../../providers/users-service/users-service';
import { UsersPage } from '../users/users';
/**
 * Generated class for the ShowUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-show-user',
  templateUrl: 'show-user.html',
  providers: [UsersServiceProvider]
})
export class ShowUserPage {
  public show_user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public us: UsersServiceProvider) {
    this.show_user = this.navParams.get('user');
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowUserPage');
  }

  /*deleteUser(userID) {
    console.log(this.us.deleteUserId(userID));
    //this.navCtrl.push(UsersPage);
      }*/
    editUser(){
      this.us.editUserId(this.show_user);
    }
    


}
