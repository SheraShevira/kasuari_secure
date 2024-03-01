import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KumpulWargaPageRoutingModule } from './kumpul-warga-routing.module';

import { KumpulWargaPage } from './kumpul-warga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KumpulWargaPageRoutingModule
  ],
  declarations: [KumpulWargaPage]
})
export class KumpulWargaPageModule {}
