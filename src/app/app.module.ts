import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SimpleHttpComponent } from './simple-http/simple-http.component';

import { YouTubeSearchComponent, youTubeServiceInjectables, SearchBox, SearchResultComponent } from './you-tube-search/you-tube-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    YouTubeSearchComponent,
    SearchBox,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    youTubeServiceInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
