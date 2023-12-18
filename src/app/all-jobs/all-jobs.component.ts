import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataInterface } from '../data-interface';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-all-jobs',
  standalone: true,
  imports: [NgFor,NgIf, NgClass],
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.css'
})
export class AllJobsComponent {

  @Input() allJob!:DataInterface

  @Input() role: string = '';
  @Input() level: string=''
  @Input() language: string ='';
  @Input() currentFilter: string = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log('Current Filter in Child:', this.currentFilter); // Debugging
  }
  


}
