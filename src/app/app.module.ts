import { AuthService } from './services/auth.service';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    LayoutModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: '', loadChildren: './layout/layout.module#LayoutModule', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        whitelistedDomains: ['localhost:3000'],
        headerName: 'x-auth-token'
      }
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
