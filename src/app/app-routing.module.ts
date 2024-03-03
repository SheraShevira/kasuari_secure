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
    redirectTo: 'case', //value ini diubah sesuai dengan halaman yang sedang kalian kembangakan, contoh sedang mengembangakan case maka value nya diubah menjadi case
    pathMatch: 'full'
  },
  {
    path: 'case',
    loadChildren: () => import('./warga/case/case.module').then( m => m.CasePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
