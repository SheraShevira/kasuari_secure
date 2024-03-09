import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryNotificationsPage } from './history-notifications.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryNotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryNotificationsPageRoutingModule {}
