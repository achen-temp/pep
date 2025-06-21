import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Topic } from './topic.model';
import { CourseVideo } from './courseVideo.model';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../App Constants/appconstants.model';

@Injectable({
  providedIn: 'root'
})
export class CourseVideosService {

  pathRoot = AppConstants.BASE_URL + "/topics";

  constructor(private http: HttpClient){}

  getAllTopics(): Observable<Topic[]>{
    return this.http.get<Topic[]>(this.pathRoot + '/all');
  }

  getTopicById(id: number): Observable<Topic>{
    return this.http.get<Topic>(this.pathRoot + "/" + id);
  }

  createUrl(videoName: string): Observable<{url: string}>{
    return this.http.get<{url: string}>(this.pathRoot + '/url/' + videoName);
  }

}
