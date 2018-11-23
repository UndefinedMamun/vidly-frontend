import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material.module';
import { MoviesComponent } from './movies/movies.component';
import { CustomersComponent } from './customers/customers.component';
import { RentalsComponent } from './rentals/rentals.component';
import { UsersComponent } from './users/users.component';
import { MeComponent } from './me/me.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { EditMeComponent } from './me/edit-me.component';
import { ViewMeComponent } from './me/view-me.component';
import { GenresComponent } from './genres/genres.component';
import { EditGenresComponent } from './genres/edit-genres/edit-genres.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    LayoutComponent,
    DashboardComponent,
    MoviesComponent,
    CustomersComponent,
    RentalsComponent,
    UsersComponent,
    MeComponent,
    EditMovieComponent,
    EditCustomerComponent,
    EditMeComponent,
    ViewMeComponent,
    GenresComponent,
    EditGenresComponent,
    CartComponent
  ],
  entryComponents: [EditMovieComponent, EditCustomerComponent, EditGenresComponent]
})
export class LayoutModule { }
