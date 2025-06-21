import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Auth/auth.service';
import { UserRole } from 'src/app/Auth/user.model';

@Component({
  selector: 'app-topics-grid',
  templateUrl: './topics-grid.component.html',
  styleUrls: ['./topics-grid.component.css']
})
export class TopicsGridComponent{
  @Input() courses: any[] = [];
  @Input() cardsPerPage = 4;
  @Input() isAdmin: boolean = false;
 
  currentPage = 1;

  get totalPages(): number {
    return Math.ceil(this.courses.length / this.cardsPerPage);
  }

  get pagedCourses(): any[] {
    const startIndex = (this.currentPage - 1) * this.cardsPerPage;
    return this.courses.slice(startIndex, startIndex + this.cardsPerPage);
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
