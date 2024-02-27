import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KebakaranPagePageRoutingModule } from './kebakaran-page-routing.module';

import { KebakaranPagePage } from './kebakaran-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KebakaranPagePageRoutingModule
  ],
  declarations: [KebakaranPagePage]
})
export class KebakaranPagePageModule {}
