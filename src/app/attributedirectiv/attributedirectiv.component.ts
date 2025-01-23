import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attributedirectiv',
  imports: [CommonModule , FormsModule ,RouterLink],
  templateUrl: './attributedirectiv.component.html',
  styleUrl: './attributedirectiv.component.css'
})
export class AttributedirectivComponent {

  divBgColor: string = 'bg-primary';
  isActiveDivColor: boolean = false;
  num1:string='';
  num2:string='';
  isActive:boolean=false;
  selectState:string='pakistan';

  studentList:any[]=[
    {studentId: '1',totalMarks:'25%',isActive:'true',  name:'Ali',age:20},
    {studentId: '2',totalMarks:'60%',isActive:'false',   name:'Ahmed',age:21},
    {studentId: '3',totalMarks:'70%',isActive:'false',   name:'Kashif',age:22},
    {studentId: '4',totalMarks:'20%',isActive:'false',   name:'Asif',age:23},
    {studentId: '5',totalMarks:'90%',isActive:'false',  name:'Nasir',age:24},
  ]
  customerStyle: any = {
    'color': 'white',
    'background-color': 'red',
    'width': '200px',
    'height': '200px',
    'border-radius': '50%',
    'text-align': 'center',

  };
   addRedColor(){
  this.divBgColor = 'bg-danger';
   }

   addblueColor(){
    this.divBgColor = 'bg-primary';
   }

    toggleColor(){
      this.isActiveDivColor = !this.isActiveDivColor;
    }




}
