import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./warga/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./warga/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'kumpul-warga',
    pathMatch: 'full'
  },
  {
    path: 'kumpul-warga',
    loadChildren: () => import('./warga/case/kumpul-warga/kumpul-warga.module').then( m => m.KumpulWargaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
