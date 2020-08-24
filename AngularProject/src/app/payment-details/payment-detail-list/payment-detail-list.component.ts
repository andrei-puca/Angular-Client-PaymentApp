import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from './../../shared/payment-detail.model';
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
  editMode : boolean = true;

  constructor(public service: LoginUserService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getOnlyUsers();
  }

  populateForm(pd:User){

    this.service.formData = Object.assign({},pd);
  }

  onDelete(PMId){
    if(confirm('Are you sure you want to delete this record?')){
    this.service.Delete(PMId)
    .subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Deleted successfully','Payment detail register');
    },
      err => {
      })
    }
  }


}

