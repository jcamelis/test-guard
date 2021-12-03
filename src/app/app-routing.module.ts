import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NoAuthComponent } from './components/no-auth/no-auth.component';
import { TestGuard } from './guards/test.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [TestGuard]
  },
  {
    path: 'no-auth',
    component: NoAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
