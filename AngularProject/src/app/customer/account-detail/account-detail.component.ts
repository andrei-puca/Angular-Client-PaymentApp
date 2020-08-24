import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  editMode : boolean = true;

  constructor(public service: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getCurrentUserAccounts();
  }

  populateForm(pd:PaymentDetail){
    this.service.formData = Object.assign({},pd);
  }

  onDelete(PMId){
    if(confirm('Are you sure you want to delete this record?')){
    this.service.deletePaymentDetail(PMId)
    .subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Deleted successfully','Payment detail register');
    },
      err => {
      })
    }
  }


}
