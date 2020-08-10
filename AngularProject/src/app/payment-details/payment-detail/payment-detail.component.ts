import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [
  ]
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service:PaymentDetailService, private toastr: ToastrService, private router: Router) { }

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

    var getFruits = JSON.parse( localStorage.getItem('currentUser') );
    console.log(getFruits.Id);
    if (form != null)
      form.form.reset();
    this.service.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: '',
      Balance: 0,
      AccountType: '',
      UserId: getFruits.Id,

    }
  }

onSubmit(form:NgForm){
  if(this.service.formData.PMId == 0)
    this.insertRecord(form);
  else
    this.updateRecord(form);
}

insertRecord(form:NgForm){
  this.service.postPaymentDetail().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.success('Submitted successfully','User added');
      this.service.refreshList();
    },
    err => {
    }
  )
 this.redirectToCustomerList();
}

updateRecord(form:NgForm){
  this.service.putPaymentDetail().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.info('Submitted successfully','User added');
      this.service.refreshList();
    },
    err => {
    }
  )
}
redirectToCustomerList(){
  this.router.navigate(['/show-customers']);
}


}
