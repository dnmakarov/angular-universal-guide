import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { UsersListingComponent } from './components/users-listing/users-listing.component';
import { UsersResolver } from './resolvers/users.resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersListingComponent,
    resolve: {
      users: UsersResolver,
    },
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
  ],
  declarations: [
    UsersListingComponent,
  ],
  providers: [
    UsersResolver,
  ],
})
export class Route1Module { }
