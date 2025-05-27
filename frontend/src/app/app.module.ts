import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursetopicComponent } from './coursetopic/coursetopic.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursetopicComponent,
    HeaderComponent,
    FooterComponent,
    TopicDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
