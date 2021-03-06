import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestProvider } from '../request/request'

@Injectable()
export class UserProvider {


  constructor(public http: HttpClient,
              private requestProvider: RequestProvider,
              ) {this.getUserInfo()}

  public username: string
  public id: string
  public email: string
  public first_name: string
  public last_name: string
  public phone_number: string;
  public group: string
  public token: any
  public photo: any
  public password1: string;
  public password2: string;
  public verifiedMobile: boolean;
  public userArray: any;

  public trips: Array<string>

  getUserInfo(){
    if (this.isAuthenticated()){
      console.log('Running getUserInfo');
      let token = window.localStorage.getItem('token');
      let headers = {'Content-Type':  'application/json', 'Authorization': 'Token ' + token };
      this.requestProvider.resquestGet('user_info', headers)
      .subscribe((data) => {
        this.id = data['id'];
        this.email = data['email'];
        this.first_name = data['first_name'];
        this.last_name = data['last_name'];
        this.group = data['group'];
        this.photo = data['photo'];
        this.phone_number = data['phone_number'];
        this.verifiedMobile = data['verified_mobile'];
        this.token = token;
      },
      (error)=>{
        console.log(error)
      }
    )
    } else (console.log('No set token'))  
  }

  isAuthenticated(){
    if (window.localStorage.getItem('token')){
      return true;
    } else {
      return false;
    }
  }

  logout(){
    delete this.username;
    delete this.id;
    delete this.email;
    delete this.first_name;
    delete this.last_name;
    delete this.phone_number;
    delete this.group;
    delete this.token;
    delete this.photo;
    delete this.password1;
    delete this.password2
    delete this.verifiedMobile;
    delete this.userArray;
    localStorage.clear()
  }

}
