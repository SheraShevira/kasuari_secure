import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KumpulWargaNotificationPageRoutingModule } from './kumpul-warga-notification-routing.module';

import { KumpulWargaNotificationPage } from './kumpul-warga-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KumpulWargaNotificationPageRoutingModule
  ],
  declarations: [KumpulWargaNotificationPage]
})
export class KumpulWargaNotificationPageModule {}
