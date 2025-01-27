import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})


export class IfElseComponent {
  div1visible = true;
  div2visible = false;
  num1:string ='';
  num2:string ='';
  selectStatus:string = '';

  showDiv1() {
    this.div1visible = true;
  }
  hideDiv1() {
    this.div1visible = false;
  }
  toggleDiv2() {
    this.div2visible = !this.div2visible;
  }
}
