import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KumpulWargaPage } from './kumpul-warga.page';

const routes: Routes = [
  {
    path: '',
    component: KumpulWargaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KumpulWargaPageRoutingModule {}
