import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '@codeffekt/ce-admin';
import { LogoutComponent } from '@codeffekt/ce-core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'home',
    canActivate: [AdminGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
