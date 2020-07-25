import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaymentDetailComponent} from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [
  {path: 'add-user', component:PaymentDetailComponent},
  {path: 'show-users', component:PaymentDetailListComponent},
  {path: 'edit-user', component:EditUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
