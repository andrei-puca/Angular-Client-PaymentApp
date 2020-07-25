import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [
  ]
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service:PaymentDetailService, private toastr: ToastrService) { }

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
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
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
      console.log(err);
    }
  )
}

updateRecord(form:NgForm){
  console.log("update");
  this.service.putPaymentDetail().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.info('Submitted successfully','User added');
      this.service.refreshList();
    },
    err => {
      console.log(err);
    }
  )
}


}
