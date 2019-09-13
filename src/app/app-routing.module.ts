import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './common/home/home.component';


const routes: Routes = [
  {
    path: 'grand-oasis-cancun',
    component: HomeComponent,
    data: {
      hotelId: 1,
    }
  },
  {
    path: '',
    redirectTo: '/grand-oasis-cancun',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
