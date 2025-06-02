import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Topic } from './topic.model';
import { CourseVideo } from './courseVideo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseVideosService {

  baseUrl = "http://localhost:5000/pilot/courses";

  constructor(private http: HttpClient){}

  getAllTopics(): Observable<Topic[]>{
    return this.http.get<Topic[]>(this.baseUrl + '/all');
  }

  getTopicById(id: number): Observable<Topic>{
    return this.http.get<Topic>(this.baseUrl + "/" + id);
  }

  createUrl(videoName: string): Observable<{url: string}>{
    return this.http.get<{url: string}>(this.baseUrl + '/url/' + videoName);
  }

  
  // topics: Topic[] = [
  //     {
  //       id: 1,
  //       title: 'Angular Basics',
  //       imageUrl: 'assets/angular-basics.jpg',
  //       description: 'Learn the fundamentals of Angular framework.',
  //       videos: [
  //             new CourseVideo('Video 1',  'test.mp4', 'assets/thumb1.jpg'),
  //             new CourseVideo('Video 2',  'test.mp4', 'assets/thumb2.jpg'),
  //             new CourseVideo('Video 3',  'test.mp4', 'assets/thumb3.jpg'),
  //             // Add more
  //           ]
  //     },
  //     {
  //       id: 2,
  //       title: 'RxJS Observables',
  //       imageUrl: 'assets/rxjs.jpg',
  //       description: 'Understand reactive programming with RxJS.',
  //       videos: [
  //             new CourseVideo('Video 1',  'test.mp4', 'assets/thumb1.jpg'),
  //             new CourseVideo('Video 2',  'test.mp4', 'assets/thumb2.jpg'),
  //             new CourseVideo('Video 3',  'test.mp4', 'assets/thumb3.jpg'),
  //             // Add more
  //           ]
  //     },
  //     {
  //       id: 3,
  //       title: 'Component Communication',
  //       imageUrl: 'assets/component-communication.jpg',
  //       description: 'How components talk to each other in Angular.',
  //       videos: [
  //             new CourseVideo('Video 1',  'test.mp4', 'assets/thumb1.jpg'),
  //             new CourseVideo('Video 2',  'test.mp4', 'assets/thumb2.jpg'),
  //             new CourseVideo('Video 3',  'test.mp4', 'assets/thumb3.jpg'),
  //             // Add more
  //           ]
  //     }
  //     // Add more topics as needed
  //   ];

    

}
