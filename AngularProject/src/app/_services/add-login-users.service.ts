import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { HttpClient } from "@angular/common/http";
import { CustomerDetails } from '../_models/customer-details';

@Injectable({
  providedIn: 'root'
})
export class AddLoginUsersService {
  formData:User;
  formDataSecond:CustomerDetails;
  readonly rootURL = 'http://localhost:54607'
  list : User[];

  constructor(private http:HttpClient) { }

  Create(){
    return this.http.post(this.rootURL+'/users/register',this.formData);
  }

  AddInPaymentDetails(){
    return this.http.post(this.rootURL+'/api/paymentdetail',this.formDataSecond);
  }

  Update(){
    return this.http.put(this.rootURL+'/users/'+ this.formData.Id, this.formData);
  }

  Delete(id){
    return this.http.delete(this.rootURL+'/users/'+ id);
  }

}
