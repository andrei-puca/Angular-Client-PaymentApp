import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../../login-users/login-users.service';
import { LoginUsers } from '../../login-users/login-users.model';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/_models/user';
import { LoginUserService } from 'src/app/login-users/login-users.service';



@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: [
  ]
})
export class PaymentDetailListComponent implements OnInit {
  editMode: boolean = true;


  constructor(public service: LoginUserService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
<<<<<<< Updated upstream
    this.service.getOnlyUsers();
  }

  populateForm(pd:User){

    this.service.formData = Object.assign({},pd);
=======
    this.service.refreshList();
    var ceva = this.service.refreshList();
   
    
  }

  populateForm(pd: LoginUsers) {
    this.service.formData = Object.assign({}, pd);
>>>>>>> Stashed changes
  }

  onDelete(Id){
    if(confirm('Are you sure you want to delete this record?')){
<<<<<<< Updated upstream
    this.service.Delete(PMId)
=======
    this.service.Delete(Id)
>>>>>>> Stashed changes
    .subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Deleted successfully','Payment detail register');
    },
      err => {
      })
    }
  }



}

