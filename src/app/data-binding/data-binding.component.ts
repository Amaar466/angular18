import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
/*
types of variable in angular
 string number boolean date
*/
  courseName: string = 'Angular';
  inputType ="checkbox";
  myClassNames: string = 'bg-success text-white p-2';
  stateName: string = 'lahore';
  rollNo: number = 101;
  isPakistani: boolean = true;
  currentDate: Date = new Date();

  firstName = signal("Amaar");

  constructor() {

  }


  changeCourseName(): void {
    this.courseName = 'React js';
    this.firstName = signal("amaar");
  }
  showAlert(message: string): void {
    alert(message);
  }

}
