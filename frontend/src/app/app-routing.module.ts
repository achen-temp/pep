import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { TopicsComponent } from './topics/topics.component';
import { SignupComponent } from './Eportal/signup/signup.component';
import { LoginComponent } from './Eportal/login/login.component';
import { AuthGuard } from './Auth/auth.guard';
import { LogoutComponent } from './Eportal/logout/logout.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'topics', component: TopicsComponent},
  {path: 'topics/:id', component: TopicDetailComponent, canActivate:[AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},

  //Redirect path
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
