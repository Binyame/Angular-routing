import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as childRoutes, ProductsModule } from './products/products.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProtectedComponent } from './protected/protected.component';
import { LoggedInGuard } from './logged-in.guard';
import { AUTH_PROVIDERS } from './auth.service';

const routes: Routes = [
  //basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },

  //authentication
  { path: 'login', component: LoginComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [LoggedInGuard] },

  //nested routes
  { path: 'products', component: ProductsComponent, children: childRoutes }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    ProductsModule],
  providers: [AUTH_PROVIDERS, LoggedInGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
