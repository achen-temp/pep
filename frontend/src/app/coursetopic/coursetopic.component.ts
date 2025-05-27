import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Topic } from '../courseVideoService/topic.model';

@Component({
  selector: 'app-coursetopic',
  templateUrl: './coursetopic.component.html',
  styleUrls: ['./coursetopic.component.css']
})
export class CoursetopicComponent {
  @Input() topic!: Topic;
  @Output() cardClicked = new EventEmitter<number>();

  onClick() {
    this.cardClicked.emit(this.topic.id);
  }
}
