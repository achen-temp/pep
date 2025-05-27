import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'topic/:id', component: TopicDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
