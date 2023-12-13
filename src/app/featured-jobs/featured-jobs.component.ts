import { Component, Input } from '@angular/core';
import { DataInterface } from '../data-interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-featured-jobs',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './featured-jobs.component.html',
  styleUrl: './featured-jobs.component.css'
})
export class FeaturedJobsComponent {

  @Input() jobCard!:DataInterface

}
