import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KejahatanNotificationPage } from './kejahatan-notification.page';

const routes: Routes = [
  {
    path: '',
    component: KejahatanNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KejahatanNotificationPageRoutingModule {}
