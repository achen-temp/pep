import { Component, OnInit } from '@angular/core';
import { Topic } from '../courseVideoService/topic.model';
import { Router } from '@angular/router';
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
    this.coursesService.getAllTopics().subscribe({
      next: data => {
        this.topics = data;
      },
      error: e => console.log(e)
    })
  }

  goToTopic(id: number) { 
    this.router.navigate(['/topic', id]);
  }

}
