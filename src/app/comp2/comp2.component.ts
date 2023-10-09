import { Component } from '@angular/core';
import { UserdataService } from '../services/usersdata.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
userName='Uxtrendz'

constructor(private _designServices:UserdataService){
  this._designServices.userName.subscribe((uname:any)=>this.userName=uname)
}
updateUserName(uname:any){
this._designServices.userName.next(uname.value)
  this.userName=uname.value
}
}
