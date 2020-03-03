import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TransformComponent } from './components/transform/transform.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { TransformPerspectiveComponent } from './components/transform-perspective/transform-perspective.component';
import { KeyframesComponent } from './components/keyframes/keyframes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransformComponent,
    AppHeaderComponent,
    TransformPerspectiveComponent,
    KeyframesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
