import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursetopicComponent } from './coursetopic.component';

describe('CoursetopicComponent', () => {
  let component: CoursetopicComponent;
  let fixture: ComponentFixture<CoursetopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursetopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursetopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
