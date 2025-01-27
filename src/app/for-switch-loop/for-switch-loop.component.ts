import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-switch-loop',
  imports: [FormsModule],
  templateUrl: './for-switch-loop.component.html',
  styleUrl: './for-switch-loop.component.css'
})
export class ForSwitchLoopComponent {

  cityArray: string [] = ['Lahore', 'FSD', 'ISD', 'Karachi'];
  dayNumber: string = '';

  studentList: any[] = [
    {studentId:'1',name: 'am',  city:'lahore',  age: 20},
    {studentId:'2',name: 'Ahmed', city:'Fsd', age: 25},
    {studentId:'3',name: 'Kashif', city:'karachi', age: 30},
    {studentId:'4',name: 'Asad', city:'Multan', age: 35},
  ];
}
