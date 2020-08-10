import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { browser } from 'protractor';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styles: [
  ]
})

export class EditUserComponent implements OnInit {

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
    const values = JSON.parse(localStorage.getItem("currentUser")['Id']);
    console.log('retrievedObject: ',values);
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
      UserId: values,
    }
  }

onSubmit(form:NgForm){
    this.updateRecord(form);

}

updateRecord(form:NgForm){
  this.service.putPaymentDetail().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.info('Submitted successfully','User update');
      this.service.refreshList();
    },
    err => {
    }
  )
  this.redirectToCustomerList();
}

redirectToCustomerList(){
  this.router.navigate(['/show-customers']);
}


}
