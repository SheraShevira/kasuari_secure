import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminNotifikasiPage } from './admin-notifikasi.page';

const routes: Routes = [
  {
    path: '',
    component: AdminNotifikasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminNotifikasiPageRoutingModule {}
