import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UserdataService } from '../services/usersdata.service';
import { UserDataResponse } from './userDataResponse.model';

const STORAGE_KEYS = {
  FirstName: 'fName',
  LastName: 'lName',
  UserId: 'userId',
  Token: 'token',
};


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userDataResponse!:UserDataResponse
  constructor(
    private userDataService: UserdataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log("usrrrrrrrrrr",this.userDataResponse)
    // This method is called when the component is initialized
  }

  // Redirect to Signup Page
  redirectToSignup() {
    this.router.navigate(['/signup']);
  }

  // Handle Sign In Process
  signinUserData(data: any) {
    this.userDataService.saveLoginData(data)
      .pipe(
        catchError((error: any) => {
          // Handle errors here, e.g., display an error message.
          console.error('Signin Error', error);
          return throwError(error);
        })
      )
      .subscribe((result:any) => {
        console.log('SignIn successful', result.token);
        if (result.status) {
          // Store user data and token in local storage
          localStorage.setItem(STORAGE_KEYS.FirstName, result.data.firstName);
          localStorage.setItem(STORAGE_KEYS.LastName, result.data.lastName);
          localStorage.setItem(STORAGE_KEYS.UserId, result.data._id);
          localStorage.setItem(STORAGE_KEYS.Token, result.token);

          // Navigate to the dashboard page
          this.router.navigate(['/dashboard']);
        }
      });
  }
}
