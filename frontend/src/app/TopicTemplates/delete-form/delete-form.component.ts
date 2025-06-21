import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { CourseVideo } from 'src/app/courseVideoService/courseVideo.model';
import { Topic } from 'src/app/courseVideoService/topic.model';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.css']
})
export class DeleteFormComponent {
    @ViewChild('deleteModal') deleteModal!: ElementRef;

    message: string = 'Are you sure you want to delete this item?';

    selectedTopic : Topic | undefined
    selectedVideo : CourseVideo| undefined
    @Output() confirmed = new EventEmitter<void>();


    private modal: any;

    openSelectedTopic(topic: Topic) {
      this.selectedTopic = topic;
      this.modal = new bootstrap.Modal(this.deleteModal.nativeElement);
      this.modal.show();
    }

    openSelectedVideo(video: CourseVideo) {
      this.selectedVideo = video;
      this.modal = new bootstrap.Modal(this.deleteModal.nativeElement);
      this.modal.show();
    }

    close() {
      const modal = bootstrap.Modal.getInstance(this.deleteModal.nativeElement);
      modal?.hide();
    }

    confirm() {
      this.confirmed.emit();
      this.close();
    }

    
}
