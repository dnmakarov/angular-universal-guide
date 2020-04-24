import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'route-1',
    loadChildren: () => import('../modules/route1/route1.module').then(m => m.Route1Module),
  },
  {
    path: 'route-2',
    loadChildren: () => import('../modules/route2/route2.module').then(m => m.Route2Module),
  },
  {
    path: '',
    redirectTo: 'route-1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
