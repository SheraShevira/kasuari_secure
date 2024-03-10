import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BencanaAlamNotificationPage } from './bencana-alam-notification.page';

const routes: Routes = [
  {
    path: '',
    component: BencanaAlamNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BencanaAlamNotificationPageRoutingModule {}
