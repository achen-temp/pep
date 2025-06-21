import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Topic } from '../../courseVideoService/topic.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';
import { UserRole } from 'src/app/Auth/user.model';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topiccard.component.html',
  styleUrls: ['./topiccard.component.css']
})
export class TopicCardComponent{
  @Input() topic!: Topic;
  @Input() isAdmin: boolean = false;
  
  constructor(private router: Router){}

  onClick() {
     this.router.navigate(['/topics', this.topic.id])
  }

  onTopicUpdated(updatedTopic: Topic) {
    console.log('New topic added:', updatedTopic);
  }

  onDeleteConfirmed() {
    // Perform delete logic here
    console.log('Item deleted!');
  }
}
