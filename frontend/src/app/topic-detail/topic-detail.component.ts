import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseVideo } from '../courseVideoService/courseVideo.model';
import { CourseVideosService } from '../courseVideoService/course-videos.service';
import { Topic } from '../courseVideoService/topic.model';
import { AuthService } from '../Auth/auth.service';
import { UserRole } from '../Auth/user.model';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit{
  topic!: Topic;
  videos: CourseVideo[] = [];
  selectedVideo? : CourseVideo;
  isAdmin: boolean = false;

  constructor(private courseService: CourseVideosService, private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(!id) return;
    this.courseService.getTopicById(+id).subscribe({
      next: selectedTopic => {
        if (!selectedTopic) return;
        this.topic = selectedTopic;
        this.videos = selectedTopic.videos;
      }
    });

    if(this.authService.getUserRole() === UserRole.ADMIN){
        this.isAdmin = true;
    } 
  }

  playVideo(video: CourseVideo) {
    this.selectedVideo = video;
    this.courseService.createUrl(video.videoName).subscribe({
      next: data => {
        this.selectedVideo!.url = data.url;
      },
      error: e => console.log(e)
    })
  }
}
