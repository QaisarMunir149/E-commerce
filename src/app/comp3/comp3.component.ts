import { Component } from '@angular/core';
import { UserdataService } from '../services/usersdata.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {
userName='Uxtrendz'

constructor(private _designServices:UserdataService){
  this._designServices.userName.subscribe((uname:any)=>this.userName=uname)
}
updateUserName(uname:any){
this._designServices.userName.next(uname.value)
  this.userName=uname.value
}
}
