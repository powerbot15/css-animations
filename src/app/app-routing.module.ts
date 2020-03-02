import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TransformComponent } from './components/transform/transform.component';
import { TransformPerspectiveComponent } from './components/transform-perspective/transform-perspective.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'transform',
    component: TransformComponent
  },
  {
    path: 'transform3d',
    component: TransformPerspectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
