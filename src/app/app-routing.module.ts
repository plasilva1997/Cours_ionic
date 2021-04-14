import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
        pathMatch: 'full'
    },
    {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
    },
    {
        path: 'list',
        loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
    },
    {
        path: 'show/:id',
        loadChildren: () => import('./pages/show/show.module').then( m => m.ShowPageModule)
    },
    {
        path: 'add',
        loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule)
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
