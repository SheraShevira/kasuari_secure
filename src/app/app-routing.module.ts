import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./warga/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'history-notifications', //value ini diubah sesuai dengan halaman yang sedang kalian kembangakan, contoh sedang mengembangakan case maka value nya diubah menjadi case
    pathMatch: 'full'
  },
  {
    path: 'case',
    loadChildren: () => import('./warga/case/case.module').then( m => m.CasePageModule)
  },
  {
    path: 'history-notifications',
    loadChildren: () => import('./admin/history-notifications/history-notifications.module').then( m => m.HistoryNotificationsPageModule)
  },
  {
    path: 'kejahatan-notification',
    loadChildren: () => import('./admin/kejahatan-notification/kejahatan-notification.module').then( m => m.KejahatanNotificationPageModule)
  },
  {
    path: 'kumpul-warga-notification',
    loadChildren: () => import('./admin/kumpul-warga-notification/kumpul-warga-notification.module').then( m => m.KumpulWargaNotificationPageModule)
  },
  {
    path: 'bencana-alam-notification',
    loadChildren: () => import('./admin/bencana-alam-notification/bencana-alam-notification.module').then( m => m.BencanaAlamNotificationPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
