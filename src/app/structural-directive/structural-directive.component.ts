import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule , FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isVisibleDiv1 = true;
  isVisibleDiv2 = true;
  num1: string ='';
  num2: string = '';
  isActive= false;
  selectedState = '';

  constructor(private  router: Router){

  }

  cityArray:string[] = ['Lahore', 'Fsd', 'Karchi', 'Okara', 'ISd'];

  // object of array

  studentList:any[]=[
    {id:1, name:'Ali', city:'Lahore' , age: 20},
    {id:2, name:'Ahmed', city:'Fsd' , age: 22},
    {id:3, name:'Asad', city:'Karchi', age: 24},
    {id:4, name:'Ahsan', city:'Okara', age: 26},
    {id:5, name:'Asim', city:'ISd', age: 28},
  ]
  navigateToAttribute()
  {
    this.router.navigateByUrl('/attribute-directive');
  }


  showDiv1(){
    this.isVisibleDiv1 = true;
  }
  hideDiv1(){
    this.isVisibleDiv1 = false;
  }

  toggleDiv2(){
    this.isVisibleDiv2 = !this.isVisibleDiv2;
    if(this.isVisibleDiv2==true)
{
  this.isVisibleDiv2 = false;
  console.log("Div2 is visible");
}
else{
  this.isVisibleDiv2 = true;
  console.log("Div2 is not visible");
}
  }

}
