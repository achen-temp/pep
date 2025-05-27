import { Component, OnInit } from '@angular/core';
import { Topic } from '../courseVideoService/topic.model';
import { Route, Router } from '@angular/router';
import { courseVideo } from '../courseVideoService/courseVideo.model';
import { CourseVideosService } from '../courseVideoService/course-videos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  topics: Topic[] = [];

  constructor(private router: Router, private coursesService: CourseVideosService){}

  ngOnInit(): void {
    this.topics = this.coursesService.getTopics();
  }

  goToTopic(id: number) {
      this.coursesService.selectTopic(id);
      this.router.navigate(['/topic', id]);
  }

}
