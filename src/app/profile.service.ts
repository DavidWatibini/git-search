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

  constructor() { }
}
