import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import 'rxjs/add/operator/map';


import {Repository} from './repository'
import {User} from './user'
import {environment} from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  username:string;

    constructor(private _http: HttpClient){
      this.username =  'watibini';

    }
    getProfileInfo(){
      return this._http.get("https://api.github.com/users/"+this.username)
      .map(result=>result)

    }
    getProfileRepository(){
      return this._http.get("https://api.github.com/users/"+this.username+'/repos')
      .map(result=>result)
  }
  updateProfile(username:string){
    this.username = username;
  }
}
