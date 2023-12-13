import { Component, Input, inject } from '@angular/core';
import { DataInterface } from '../data-interface';
import { FeaturedJobsComponent } from '../featured-jobs/featured-jobs.component';
import { JobsService } from '../jobs.service';
import { NgFor, NgIf } from '@angular/common';
import { NonFeaturedJobsComponent } from '../non-featured-jobs/non-featured-jobs.component';
import { AllJobsComponent } from '../all-jobs/all-jobs.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-pass-home',
  standalone: true,
  imports: [FeaturedJobsComponent,NgFor, NonFeaturedJobsComponent, NgIf, AllJobsComponent, FormsModule,ReactiveFormsModule],
  templateUrl: './pass-home.component.html',
  styleUrl: './pass-home.component.css'
})
export class PassHomeComponent {

  jobData = inject(JobsService)

  featuredJobs:DataInterface[] = this.jobData.getFeaturedJobData()

  nonFeaturedJobs:DataInterface[] = this.jobData.getJobData()

  allJobs:DataInterface[] = this.jobData.getAllJobs()

  searchFilter = false


  searchControl = new FormControl('');
  filteredJobs: DataInterface[] = this.allJobs;
  currentFilter: string = '';

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300), // this will wait for a pause in typing of 300 ms
        distinctUntilChanged() // this will only emit when the current value is different from the last
      )
      .subscribe(newValue => {
        console.log('New Value:', newValue);
        this.currentFilter = newValue ?? '';
        this.filteredRoles(this.currentFilter);
      });
      
  }


  
  filteredRoles(text: string = '') {
    this.currentFilter = text;
    this.searchFilter = text.length > 0;
    this.filteredJobs = this.allJobs.filter(job => {
      // Check if the role matches the text
      const roleMatch = job.role.toLowerCase().includes(text.toLowerCase());
  
      // Check if any language matches the text
      const languageMatch = job.languages?.some(language =>
        language.toLowerCase().includes(text.toLowerCase())
      );
  
      // Return true if either roleMatch or languageMatch is true
      return roleMatch || languageMatch;
    });
  }
  
  


}


