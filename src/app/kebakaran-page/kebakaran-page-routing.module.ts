import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KebakaranPagePage } from './kebakaran-page.page';

const routes: Routes = [
  {
    path: '',
    component: KebakaranPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KebakaranPagePageRoutingModule {}
