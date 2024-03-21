import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminNotifikasiPageRoutingModule } from './admin-notifikasi-routing.module';

import { AdminNotifikasiPage } from './admin-notifikasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminNotifikasiPageRoutingModule
  ],
  declarations: [AdminNotifikasiPage]
})
export class AdminNotifikasiPageModule {}
