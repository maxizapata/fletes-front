import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RequestProvider {

  constructor(
    public http: HttpClient,
    ) {}

  public domain: string = '192.168.0.110:8000';
    
  setUrl(action: string, user_id?){
    let http = "http://"
    let ws = "ws://"
    let url: string
    if (action === 'login'){
      url = http + this.domain + "/api/auth/login/";
    }
    else if (action === 'ws_connect'){
      url = ws + this.domain + '/ws/trips/' + user_id + '/';
    }
    else if (action === 'signup'){
      console.log('request.ts signup')
      url = http + this.domain + "/api/auth/signup/";
    }
    else if (action === 'user_info'){
      url = http + this.domain + "/api/auth/user_info/";
    }
    else if (action === 'list_vehicles'){
      url = http + this.domain + "/api/trips/vehicle-list/"
    }
    else if (action === 'driver_vehicles'){
      url = http + this.domain + "/api/trips/user-vehicles/";
    }
    else if (action === 'add_vehicle'){
      url = http + this.domain + "/api/trips/create-vehicle/";
    }
    else if (action === 'get_mobile_token'){
      url = http + this.domain + "/api/mobile-token/";
    }
    else if (action === 'send_token'){
      url = http + this.domain + "/api/mobile-token/check/";
    }
    return url;
  }

  public requestsPost(action: string, headers: any, data){
    let url = this.setUrl(action)
    return new Promise((resolve, reject) =>{
      const httpOptions = {
        headers: new HttpHeaders(headers)
      };
      this.http.post(url, JSON.stringify(data), httpOptions)
      .subscribe(res => {
       resolve(res);
       console.log(res)
      }, (err) => {
        reject(err);
      });
    });
  }

  resquestGet(action, headers){
    let url = this.setUrl(action)
    const httpOptions = {
      headers: new HttpHeaders(headers)
    };
    return this.http.get(url, httpOptions)
  }

  public requestsPatch(action: string, headers: any, data){
    let url = this.setUrl(action)
    return new Promise((resolve, reject) =>{
      const httpOptions = {
        headers: new HttpHeaders(headers)
      };
      this.http.patch(url, JSON.stringify(data), httpOptions)
      .subscribe(res => {
       resolve(res); 
      }, (err) => {
        reject(err);
      });
    });
  }

  isValid(http_response, desired_status_code){
    if (http_response === desired_status_code){
      return true;
    }
    else {
      return false;
    }
  }

  getHeaders(){
    return {
      'Content-Type':  'application/json', 
      'Authorization': 'Token ' + localStorage.getItem('token') 
    }
  }
}
