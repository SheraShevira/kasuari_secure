import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserNotifikasiPageRoutingModule } from './user-notifikasi-routing.module';

import { UserNotifikasiPage } from './user-notifikasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserNotifikasiPageRoutingModule
  ],
  declarations: [UserNotifikasiPage]
})
export class UserNotifikasiPageModule {}
