import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedJobsComponent } from './featured-jobs.component';

describe('FeaturedJobsComponent', () => {
  let component: FeaturedJobsComponent;
  let fixture: ComponentFixture<FeaturedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
