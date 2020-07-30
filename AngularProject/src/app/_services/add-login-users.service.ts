import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddLoginUsersService {
  formData:User;
  readonly rootURL = 'http://localhost:54607'
  list : User[];

  constructor(private http:HttpClient) { }

  Create(){
    return this.http.post(this.rootURL+'/users/register',this.formData);
  }

  Update(){
    return this.http.put(this.rootURL+'/users/'+ this.formData.Id, this.formData);
  }

  Delete(id){
    return this.http.delete(this.rootURL+'/users/'+ id);
  }

}
