import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesListingComponent } from './components/resources-listing/resources-listing.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesListingComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    ResourcesListingComponent,
  ],
})
export class Route2Module { }
