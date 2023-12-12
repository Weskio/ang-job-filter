import { Component, Input } from '@angular/core';
import { DataInterface } from '../data-interface';

@Component({
  selector: 'app-pass-home',
  standalone: true,
  imports: [],
  templateUrl: './pass-home.component.html',
  styleUrl: './pass-home.component.css'
})
export class PassHomeComponent {

  @Input() JobData!:DataInterface

}
