import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserNotifikasiPage } from './user-notifikasi.page';

const routes: Routes = [
  {
    path: '',
    component: UserNotifikasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserNotifikasiPageRoutingModule {}
