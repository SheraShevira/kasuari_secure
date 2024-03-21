import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminRiwayatKosongPage } from './admin-riwayat-kosong.page';

const routes: Routes = [
  {
    path: '',
    component: AdminRiwayatKosongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRiwayatKosongPageRoutingModule {}
