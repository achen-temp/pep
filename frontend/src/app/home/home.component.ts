import { Component, OnInit } from '@angular/core';
import { Topic } from '../courseVideoService/topic.model';
import { Router } from '@angular/router';
import { CourseVideosService } from '../courseVideoService/course-videos.service';
import { AuthService } from '../Auth/auth.service';
import { UserRole } from '../Auth/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  topics: Topic[] = [];
  isAdmin: boolean = false;

  constructor(private router: Router, private coursesService: CourseVideosService,
    private authService: AuthService
  ){}

  ngOnInit(): void {

    if(this.authService.getUserRole() === UserRole.ADMIN){
        this.isAdmin = true;
    } 

    /**
     * Need function to filter Popular and New courses
     */
    this.coursesService.getAllTopics().subscribe({
      next: data => {
        this.topics = data.slice(0,5);
      },
      error: e => console.log(e)
    })
  }

}
