import { Component } from '@angular/core';
import { UserdataService } from '../services/usersdata.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
userName='Uxtrendz'

constructor(private designServices:UserdataService){
  this.designServices.userName.subscribe((uname:any)=>this.userName=uname)
}
updateUserName(uname:any){
this.designServices.userName.next(uname.value)

}
}
