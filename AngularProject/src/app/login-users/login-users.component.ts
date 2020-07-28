import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../login-users/login-users.service';
import { LoginUsers } from '../login-users/login-users.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styles: [
  ]
})
export class LoginUsersComponent implements OnInit {
  editMode : boolean = true;

  constructor(public service: LoginUserService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(pd:LoginUsers){
    this.service.formData = Object.assign({},pd);
  }

  


}

