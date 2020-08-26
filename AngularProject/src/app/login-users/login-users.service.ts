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

  Create(){
    return this.http.post(this.rootURL+'/users/register',this.formData);
  }

  Update(){
    return this.http.put(this.rootURL+'/users/'+ this.formData.Id, this.formData);
  }

  Delete(id){
    return this.http.delete(this.rootURL+'/users/'+ id);
  }


refreshList(){
  const token = localStorage.getItem('userToken');
  this.http.get(this.rootURL+'/users', {headers: new HttpHeaders().set('token',token)})
  .toPromise()
  .then(res => this.list = res as LoginUsers[]);
 
  
<<<<<<< Updated upstream
=======

}
>>>>>>> Stashed changes

}

<<<<<<< Updated upstream
getOnlyUsers(){
  const token = localStorage.getItem('userToken');
  this.http.get(this.rootURL+'/users?role=User', {headers: new HttpHeaders().set('token',token)})
  .toPromise()
  .then(res => this.list = res as LoginUsers[]);
}



=======
>>>>>>> Stashed changes
}