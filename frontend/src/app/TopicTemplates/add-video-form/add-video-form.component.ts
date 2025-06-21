import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { OutletContext } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { CourseVideo } from 'src/app/courseVideoService/courseVideo.model';

@Component({
  selector: 'app-add-video-form',
  templateUrl: './add-video-form.component.html',
  styleUrls: ['./add-video-form.component.css']
})
export class AddVideoFormComponent{
  @ViewChild('addVideoModal') addVideoModal!: ElementRef;

  @Output() videoAdded = new EventEmitter<CourseVideo>();

  formTitle = '';
  newVideo: CourseVideo = new CourseVideo('', '', '', '');

  openNewForm() {
    this.formTitle = 'Add Video';
    console.log(this.newVideo);
    const modal = new bootstrap.Modal(this.addVideoModal.nativeElement);
    modal.show();
  }
  
  openUpdateForm(video: CourseVideo){
    this.formTitle = 'Update Video'
    this.newVideo = video;
    const modal = new bootstrap.Modal(this.addVideoModal.nativeElement);
    modal.show();
  }

  close() {
    const modal = bootstrap.Modal.getInstance(this.addVideoModal.nativeElement);
    modal?.hide();
  }

  submitAddVideo() {
    console.log('New video:', this.newVideo);
    this.videoAdded.emit(this.newVideo)

    this.close();

    //reset form
    this.newVideo = new CourseVideo('', '', '', '');
  }

 
}
