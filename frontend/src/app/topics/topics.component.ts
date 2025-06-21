import { Component, OnInit } from '@angular/core';
import { CourseVideosService } from '../courseVideoService/course-videos.service';
import { Topic } from '../courseVideoService/topic.model';
import { Router } from '@angular/router';
import { AuthService } from '../Auth/auth.service';
import { UserRole } from '../Auth/user.model';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
})
export class TopicsComponent implements OnInit {
  topics: Topic[] = [];
  filteredTopics: Topic[] = [];
  pagedTopics: Topic[] = [];

  searchTerm = '';
  currentPage = 1;
  pageSize = 8;

  isAdmin = false;

  constructor(private coursesService: CourseVideosService, private authService: AuthService){

  }

  ngOnInit() {
    if(this.authService.getUserRole() === UserRole.ADMIN){
        this.isAdmin = true;
    } 

    this.coursesService.getAllTopics().subscribe({
      next: data => {
        this.topics = data;
        this.filteredTopics = [...this.topics];
        this.updatePagedTopics();
      },
      error: e => console.log(e)
    })
  }


  filterTopics() {
    const term = this.searchTerm.toLowerCase();
    this.filteredTopics = this.topics.filter(
      (t) =>
        t.title.toLowerCase().includes(term) ||
        t.description.toLowerCase().includes(term)
    );
    this.currentPage = 1;
    this.updatePagedTopics();
  }

  updatePagedTopics() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedTopics = this.filteredTopics.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }

  get totalPages() {
    return Math.ceil(this.filteredTopics.length / this.pageSize);
  }

  get totalPagesArray() {
    return Array(this.totalPages)
      .fill(0)
      .map((_, i) => i + 1);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagedTopics();
  }
}
