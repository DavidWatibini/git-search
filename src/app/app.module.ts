import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { GitComponent } from './git/git.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:"profile",component:ProfileComponent},
  {path:"search",component:SearchComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    GitComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
