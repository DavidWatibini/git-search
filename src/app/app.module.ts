import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms'

const routes:Routes=[
  {path:"profile",component:ProfileComponent},
  {path:"search",component:SearchComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
