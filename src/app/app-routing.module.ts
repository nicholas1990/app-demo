import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// {
//   path: 'login',
//   component: LoginPage,
//   pathMatch: 'full'
// },

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('../pages/tabs/tabs.module').then( m => m.TabsPageModule)
    // TODO: AuthGuard
  },
  {
    path: '',
    loadChildren: () => import('../pages/tabs/tabs.module').then( m => m.TabsPageModule)
    // TODO: AuthGuard
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
