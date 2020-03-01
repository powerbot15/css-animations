import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TransformComponent } from './components/transform/transform.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'transform',
    component: TransformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
