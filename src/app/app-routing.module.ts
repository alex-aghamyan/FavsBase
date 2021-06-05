import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)},
  {path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(module => module.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }