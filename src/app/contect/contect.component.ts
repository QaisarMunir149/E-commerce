import { Component} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css'],
 
})

export class ContectComponent implements OnInit {
user='hello world'
myReactiveForm!:FormGroup;

// constructor(private fb:FormBuilder){ }
 onSubmit(){
  console.log(this.myReactiveForm);
  
}



ngOnInit (){
  
this.myReactiveForm = new FormGroup({
  'userDetail': new FormGroup({
'username': new FormControl(null, Validators.required),
'email' : new FormControl(null, [Validators.required,Validators.email])
  }),
'course' : new FormControl('Angular'),
'skills' : new FormArray([
  new FormControl(null),
])
// 'gender' : new FormControl(null),
})
}





}
