import { Component ,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

 @Input() animal:any;
getname(){
console.log(this.animal);
}

@Output() name=new EventEmitter<string>;
getName(){
this.name.emit('HI every one')
}

}
