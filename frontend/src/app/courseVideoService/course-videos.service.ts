import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Topic } from './topic.model';
import { courseVideo } from './courseVideo.model';

@Injectable({
  providedIn: 'root'
})
export class CourseVideosService {

  private subject = new BehaviorSubject<Topic | null>(null);
  subject$ = this.subject.asObservable();

  topics: Topic[] = [
      {
        id: 1,
        title: 'Angular Basics',
        imageUrl: 'assets/angular-basics.jpg',
        description: 'Learn the fundamentals of Angular framework.',
        videos: [
              new courseVideo('Video 1', 'assets/video1.mp4', 'assets/thumb1.jpg'),
              new courseVideo('Video 2', 'assets/video2.mp4', 'assets/thumb2.jpg'),
              new courseVideo('Video 3', 'assets/video3.mp4', 'assets/thumb3.jpg'),
              // Add more
            ]
      },
      {
        id: 2,
        title: 'RxJS Observables',
        imageUrl: 'assets/rxjs.jpg',
        description: 'Understand reactive programming with RxJS.',
        videos: [
              new courseVideo('Video 1', 'assets/video1.mp4', 'assets/thumb1.jpg'),
              new courseVideo('Video 2', 'assets/video2.mp4', 'assets/thumb2.jpg'),
              new courseVideo('Video 3', 'assets/video3.mp4', 'assets/thumb3.jpg'),
              // Add more
            ]
      },
      {
        id: 3,
        title: 'Component Communication',
        imageUrl: 'assets/component-communication.jpg',
        description: 'How components talk to each other in Angular.',
        videos: [
              new courseVideo('Video 1', 'assets/video1.mp4', 'assets/thumb1.jpg'),
              new courseVideo('Video 2', 'assets/video2.mp4', 'assets/thumb2.jpg'),
              new courseVideo('Video 3', 'assets/video3.mp4', 'assets/thumb3.jpg'),
              // Add more
            ]
      }
      // Add more topics as needed
    ];

    getTopics(){
      return this.topics;
    }

    selectTopic(id: number): void {
      const topic = this.topics.find(t => t.id === id);
      if (topic) {
        this.subject.next(topic);
      } else {
        console.warn(`Topic with id ${id} not found.`);
      }
    }

}
