import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { TopicsComponent } from './topics/topics.component';
import { SignupComponent } from './Eportal/signup/signup.component';
import { LoginComponent } from './Eportal/login/login.component';
import { TopicCardComponent } from './TopicTemplates/topic-card/topiccard.component';
import { TopicsGridComponent } from './TopicTemplates/topics-grid/topics-grid.component';
import { ButtonModule } from 'primeng/button';
import { AddTopicFormComponent } from './TopicTemplates/add-topic-form/add-topic-form.component';
import { DeleteFormComponent } from './TopicTemplates/delete-form/delete-form.component';
import { AddVideoFormComponent } from './TopicTemplates/add-video-form/add-video-form.component';
import { AuthInterceptor } from './Auth/auth.interceptor';
import { LogoutComponent } from './Eportal/logout/logout.component';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopicCardComponent,
    HeaderComponent,
    FooterComponent,
    TopicDetailComponent,
    TopicsComponent,
    SignupComponent,
    LoginComponent,
    TopicsGridComponent,
    AddTopicFormComponent,
    DeleteFormComponent,
    AddVideoFormComponent,
    LogoutComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    CardModule
  ],
  providers: [
     {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
