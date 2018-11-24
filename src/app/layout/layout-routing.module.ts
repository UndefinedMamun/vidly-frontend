import { AuthGuardService } from './../guards/auth-guard.service';
import { CartComponent } from './cart/cart.component';
import { EditMeComponent } from './me/edit-me.component';
import { ViewMeComponent } from './me/view-me.component';
import { MeComponent } from './me/me.component';
import { UsersComponent } from './users/users.component';
import { RentalsComponent } from './rentals/rentals.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesComponent } from './movies/movies.component';
import { CustomersComponent } from './customers/customers.component';
import { GenresComponent } from './genres/genres.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuardService], children: [
      { path: '', component: DashboardComponent },
      { path: 'movies', component: MoviesComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'rentals', component: RentalsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'genres', component: GenresComponent },
      { path: 'cart', component: CartComponent },
      {
        path: 'me', component: MeComponent, children: [
          { path: '', component: ViewMeComponent },
          { path: 'edit', component: EditMeComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
