import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { courseVideo } from '../courseVideoService/courseVideo.model';
import { CourseVideosService } from '../courseVideoService/course-videos.service';
import { Topic } from '../courseVideoService/topic.model';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit{
  topicId!: number;
  topic!: Topic;
  videos: courseVideo[] = [];
  selectedVideo: any = null;

  constructor(private courseService: CourseVideosService) {}

  ngOnInit() {
    this.courseService.subject$.subscribe({
      next: selectedTopic => {
        if (!selectedTopic) return;
        this.topic = selectedTopic;
        this.videos = selectedTopic.videos;
      }
    });
  }


  playVideo(video: any) {
    this.selectedVideo = video;
  }
}
