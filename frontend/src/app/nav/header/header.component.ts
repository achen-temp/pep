import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/Auth/auth.service';
import { UserRole } from 'src/app/Auth/user.model';
import { Topic } from 'src/app/courseVideoService/topic.model';
import { AddTopicFormComponent } from 'src/app/TopicTemplates/add-topic-form/add-topic-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isAdmin: boolean = false;
  isLogined: boolean = false;

  constructor(private authService: AuthService){ }

  ngOnInit(): void {
    this.authService.authStatus$.subscribe({
      next: loginStatus =>{
        this.isLogined = loginStatus;
        this.isAdmin = loginStatus && this.authService.getUserRole() === UserRole.ADMIN
      },
      error: e => {console.log('ERROR: ' +  e)}
    })
  }

  onTopicAdded(newTopic: Topic) {
    console.log('New topic added:', newTopic);
  }

  onLogout(){
    this.authService.logout();
    this.isLogined = false;
    this.isAdmin = false;
  }
}
