import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from '../services/usersdata.service';
import { Router } from '@angular/router';

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  dob: string;
  gender: string;
}

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  singup: FormGroup;

  constructor(
    private userData: UserdataService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // Initialize the signup form with form controls and validators
    this.singup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  // Handle user signup form submission
  signupUserData() {
    // Log the form data for debugging
    console.log(this.singup.value);

    // Call the service to sign up the user with the provided data
    this.userData.signupUserData(this.singup.value).subscribe(
      (result: any) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Navigate to the signin page
  goToSignin() {
    this.router.navigate(['']);
  }
}
