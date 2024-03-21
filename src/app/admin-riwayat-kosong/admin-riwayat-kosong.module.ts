import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminRiwayatKosongPageRoutingModule } from './admin-riwayat-kosong-routing.module';

import { AdminRiwayatKosongPage } from './admin-riwayat-kosong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminRiwayatKosongPageRoutingModule
  ],
  declarations: [AdminRiwayatKosongPage]
})
export class AdminRiwayatKosongPageModule {}
