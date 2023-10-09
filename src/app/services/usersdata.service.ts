import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url='http://192.168.1.65:7000'
constructor(private http:HttpClient){}
getProducts(){
  return this.http.get(`${this.url}/getProducts`)
}

userName=new Subject<any>();

mobileCategory(value:any):Observable<any>{
 
  return this.http.get(`${this.url}/getProduct/${value}`) 

}

addProduct(body:any):any{
 return this.http.post(`${this.url}/createProduct`,body);
}

updateData(body:any,id:any){
   return this.http.put(`${this.url}/updateProduct/${id}`,body);
   
}
deleteData(id:any):Observable<any>{
 

 
   return this.http.delete(`${this.url}/delete/${id}`);
}


// SingUp

urlSup='http://192.168.1.65:7000/signup'



urlSin='http://192.168.1.65:7000/signin'
// url2='https://jsonplaceholder.typicode.com/users'
saveLoginData(data:any){
  return this.http.post(this.urlSin,data)
 
}
signupUserData(data:any){
  return this.http.post(this.urlSup,data)
}

}
