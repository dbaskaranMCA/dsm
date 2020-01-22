import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GlobalComponent } from './global/global.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: 'components', component: HomeComponent,
    children: [
      { path: 'global', component: GlobalComponent }
    ]
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
