import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 import { UsersServiceProvider } from '../../providers/users-service/users-service';
 import { ShowUserPage } from '../show-user/show-user';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
  providers: [UsersServiceProvider]
})
export class UsersPage {
  public users: any;

  constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		public us: UsersServiceProvider
  		) {
        this.users = [];
  }

  ionViewDidLoad() {
  	this.us.getUsers().subscribe(data =>{
  				this.users = data;
          //console.log(this.users);
  			});
    console.log('ionViewDidLoad UsersPage');
  }

  showUser(user) {
    this.navCtrl.push(ShowUserPage,{user: user});
  }

}
