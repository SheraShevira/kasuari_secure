import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BencanaAlamNotificationPageRoutingModule } from './bencana-alam-notification-routing.module';

import { BencanaAlamNotificationPage } from './bencana-alam-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BencanaAlamNotificationPageRoutingModule
  ],
  declarations: [BencanaAlamNotificationPage]
})
export class BencanaAlamNotificationPageModule {}
