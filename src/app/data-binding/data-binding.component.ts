import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
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

  rollNo: number = 101;

  isPakistani: boolean = true;

  currentDate: Date = new Date();

  constructor() {

  }

  showAlert(message: string): void {
    alert(message);
  }

}
