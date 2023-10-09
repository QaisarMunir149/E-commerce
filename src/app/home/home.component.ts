import { Component } from '@angular/core';
import { UserdataService } from '../services/usersdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
toadd=''
add(){
  this.toadd='ADD SOMETHING'
}

userName='Uxtrendz'
constructor(private _designServices:UserdataService){
  this._designServices.userName.subscribe((uname:any)=>this.userName=uname)
}
updateUserName(uname:any){
this._designServices.userName.next(uname.valu)
  this.userName=uname.value
}
}
