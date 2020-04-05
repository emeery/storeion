import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./containers/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'store',
    loadChildren: './containers/store/store.module#StorePageModule'
    // loadChildren: () => import('./containers/store/store.module').then( m => m.StorePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
