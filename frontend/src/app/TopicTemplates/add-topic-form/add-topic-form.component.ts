import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Topic } from 'src/app/courseVideoService/topic.model';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-add-topic-form',
  templateUrl: './add-topic-form.component.html',
  styleUrls: ['./add-topic-form.component.css']
})
export class AddTopicFormComponent{
  @ViewChild('addTopicModal') addTopicModal!: ElementRef;

  @Output() topicAdded = new EventEmitter<Topic>();

  formTitle = '';
  topic: Topic = new Topic('', '', '', []);

  openNewForm() {
    this.formTitle = 'Add Topic'
    const modal = new bootstrap.Modal(this.addTopicModal.nativeElement);
    modal.show();
  }

  openUpdateForm(selectedTopic: Topic){
    this.formTitle = 'Update Topic';
    this.topic = selectedTopic;
    const modal = new bootstrap.Modal(this.addTopicModal.nativeElement);
    modal.show();
  }

  close() {
    const modal = bootstrap.Modal.getInstance(this.addTopicModal.nativeElement);
    modal?.hide();
  }

  submitForm() {
    this.topicAdded.emit(this.topic);

    this.close();

    // Reset form
    this.topic = new Topic('', '', '', []);
  }
}
