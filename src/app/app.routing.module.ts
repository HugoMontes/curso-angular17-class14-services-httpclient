import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  // { path: '404', component: NotFoundPageComponent },
  // { path: '**', redirectTo: '/404', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },       // http://localhost:4200/
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class RoutingModule {}
