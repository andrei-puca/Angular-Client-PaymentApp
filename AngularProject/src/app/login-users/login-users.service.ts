import { Injectable } from '@angular/core';
import { LoginUsers } from '../login-users/login-users.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  formData:LoginUsers;
  readonly rootURL = 'http://localhost:54607'
  list : LoginUsers[];

  constructor(private http:HttpClient) { }

//   postPaymentDetail(){
//     return this.http.post(this.rootURL+'/PaymentDetail',this.formData);
//   }

//   putPaymentDetail(){
//     return this.http.put(this.rootURL+'/PaymentDetail/'+ this.formData.PMId, this.formData);
//   }

//   deletePaymentDetail(id){
//     return this.http.delete(this.rootURL+'/PaymentDetail/'+ id);
//   }



refreshList(){
  const token = localStorage.getItem('userToken');
  this.http.get(this.rootURL+'/users/getadmins', {headers: new HttpHeaders().set('token',token)})
  .toPromise()
  .then(res => this.list = res as LoginUsers[]);
}


}
