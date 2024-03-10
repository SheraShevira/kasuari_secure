import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KumpulWargaNotificationPage } from './kumpul-warga-notification.page';

const routes: Routes = [
  {
    path: '',
    component: KumpulWargaNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KumpulWargaNotificationPageRoutingModule {}
