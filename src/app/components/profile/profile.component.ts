import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any;
  repos:any;
  username:string;


  constructor(private profileservice: ProfileService) { 
    
  }
  findProfile()
    {
      this.profileservice.getProfileInfo().subscribe(profile=>{
        console.log(profile);
        this.profile=profile;
      });
  
      this.profileservice.getProfilerepos().subscribe(repos => {
        console.log(repos);
        this.repos=repos;
      })

      this.profileservice.updateProfile(this.username);
    }
  ngOnInit() {
  }

}
