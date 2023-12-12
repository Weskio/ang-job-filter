import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonFeaturedJobsComponent } from './non-featured-jobs.component';

describe('NonFeaturedJobsComponent', () => {
  let component: NonFeaturedJobsComponent;
  let fixture: ComponentFixture<NonFeaturedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonFeaturedJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonFeaturedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
