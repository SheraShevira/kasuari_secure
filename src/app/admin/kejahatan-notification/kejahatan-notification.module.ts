import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KejahatanNotificationPageRoutingModule } from './kejahatan-notification-routing.module';

import { KejahatanNotificationPage } from './kejahatan-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KejahatanNotificationPageRoutingModule
  ],
  declarations: [KejahatanNotificationPage]
})
export class KejahatanNotificationPageModule {}
