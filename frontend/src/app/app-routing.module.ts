import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'topic/:id', component: TopicDetailComponent},

  //Redirect path
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
