import { Component, OnInit } from '@angular/core';
import { AddLoginUsersService } from 'src/app/_services/add-login-users.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Role } from 'src/app/_models/role';
import { Router } from '@angular/router';
import { LoginUserService } from '../login-users.service';

@Component({
  selector: 'app-edit-login-users',
  templateUrl: './edit-login-users.component.html',
  styleUrls: ['./edit-login-users.component.css']
})
export class EditLoginUsersComponent implements OnInit {

  constructor(public service:LoginUserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    if (!this.service.formData) {
        this.resetForm();

    }
    // this.service.formData = {
    //   PMId: 0,
    //   CardOwnerName: '',
    //   CardNumber: '',
    //   ExpirationDate: '',
    //   CVV: ''
    // }
  }


  resetForm(form?: NgForm) {

    if (form != null)
      form.form.reset();
    this.service.formData = {
      Id: 0,
      FirstName: '',
      LastName: '',
      Username: '',
      Password: '',
      Role: Role.User,
      CreationDate: ''
    }
  }

onSubmit(form:NgForm){
  if(this.service.formData.Id == 0)
    this.insertRecord(form);
  else
    this.updateRecord(form);
}

insertRecord(form:NgForm){
  this.service.Create().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.success('Submitted successfully','User added');
      //this.service.refreshList();
    },
    err => {
    }
  )
}

updateRecord(form:NgForm){
  this.service.Update().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.info('Submitted successfully','User added');
      //this.service.refreshList();
    },
    err => {
    }
  )
  this.redirectToUserList();
}

redirectToUserList(){
  this.router.navigate(['/login-users']);
}

}
