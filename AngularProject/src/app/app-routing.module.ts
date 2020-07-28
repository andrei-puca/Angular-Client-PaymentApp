import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from '../app/home/home.component';
import { AdminComponent } from '../app/admin/admin.component';
import { LoginComponent } from '../app/login/login.component';
import { AuthGuard } from '../app/_helper/auth.guard';
import { Role } from '../app/_models/role';
import {LoginUsersComponent} from '../app/login-users/login-users.component';

const routes: Routes = [
  {path: 'add-user', component:PaymentDetailComponent},
  {path: 'show-users', component:PaymentDetailListComponent},
  {path: 'edit-user', component:EditUserComponent},
  {path: 'login-users', component:LoginUsersComponent},
  {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
  },
  {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
  },
  {
        path: 'login',
        component: LoginComponent
  },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

