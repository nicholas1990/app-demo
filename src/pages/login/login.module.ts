import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,

    LoginPageRoutingModule,

    MaterialModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
