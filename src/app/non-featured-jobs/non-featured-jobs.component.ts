import { Component, Input } from '@angular/core';
import { DataInterface } from '../data-interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-non-featured-jobs',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './non-featured-jobs.component.html',
  styleUrl: './non-featured-jobs.component.css'
})
export class NonFeaturedJobsComponent {

  @Input() jobNonFeaturedCard!: DataInterface

}
