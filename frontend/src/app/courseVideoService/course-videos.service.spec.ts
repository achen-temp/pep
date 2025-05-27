import { TestBed } from '@angular/core/testing';
import { CourseVideosService } from './course-videos.service';


describe('CourseVideosService', () => {
  let service: CourseVideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
