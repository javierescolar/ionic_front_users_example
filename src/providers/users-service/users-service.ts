import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsersServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UsersServiceProvider {

  constructor(public http: Http) {
    console.log('Hello UsersServiceProvider Provider');
  }

  getUsers() {
  	return this.http.get('http://localhost:3000/api/users.json')
  		.map(res => res.json());
  			
  }

  getUsersId(userId) {
  	return this.http.get('http://localhost:3000/api/users/'+userId)
  		.map(res => res.json());
  			
  }

  editUserId(user){
    let body = new FormData();
    body.append('name', user.name);
    body.append('surnames', user.surnames);
    body.append('age', user.age);
    return this.http.put('http://localhost:3000/api/users/'+user.id,body)
      .map((res) => res.json());
  }

}
