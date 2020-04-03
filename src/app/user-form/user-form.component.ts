import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent{
  username
  disbutton=false
  constructor() { }
  CheckUserName(){
    if(this.username==null)
    {
      this.disbutton=true;
    }
  }
  //remove username
  ReomoveUsername(){
    this.username=null    
  }
}
