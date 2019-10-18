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

  getUserInfo(){
    if (this.isAuthenticated()){
      console.log('Running getUserInfo');
      let token = window.localStorage.getItem('token');
      let headers = {'Content-Type':  'application/json', 'Authorization': 'Token ' + token };
      this.requestProvider.resquestGet('user_info', headers)
        .subscribe((data) => {
          console.log('Cargando datos de usuario...');
          console.log(data['email'])
          this.id = data['id'];
          this.email = data['email'];
          this.first_name = data['first_name'];
          this.last_name = data['last_name'];
          this.group = data['group'];
          this.photo = data['photo'];
          this.phone_number = data['phone_number'];
          this.verifiedMobile = data['verified_mobile'];
          console.log('En user verificando el telefono')
          console.log(data)
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
    localStorage.clear()
  }

}
