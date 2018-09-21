import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http'

import 'rxjs/add/operator/map'

import { map } from "rxjs/operators";
import { Observable } from "rxjs/Rx";
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username :string ;
  private clientid="cd191f98c2d7dc340bfa";
  private clientsecret="db60ad13505bf4f1a1978ca4f079e886b99e31c7";

  constructor(private http:Http) { 
    console.log("Ready!!");
    this.username='rajatsingh25aug';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/"+this.username+"?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).pipe(map(res => res.json()));
  }
  getProfilerepos(){
    return this.http.get("https://api.github.com/users/"+this.username+"/repos"+"?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).pipe(map(res => res.json()));
  }
  updateProfile(username:string){
    this.username=username;
  }
}
