import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
// used to create fake backend

import { JwtInterceptor } from '../app/_helper/jwt.interceptor';
import { ErrorInterceptor } from '../app/_helper/error.interceptor';

import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailService } from './shared/payment-detail.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginUsersComponent } from './login-users/login-users.component';
import { AddLoginUsersComponent } from './login-users/add-login-users/add-login-users.component';
import { EditLoginUsersComponent } from './login-users/edit-login-users/edit-login-users.component';
import { AccountDetailComponent } from './customer/account-detail/account-detail.component';






@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    EditUserComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    LoginUsersComponent,
    AddLoginUsersComponent,
    EditLoginUsersComponent,
    AccountDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    PaymentDetailService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true},


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
