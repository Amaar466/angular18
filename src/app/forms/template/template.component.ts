import { state } from '@angular/animations';
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { last } from 'rxjs';

@Component({
  selector: 'app-template',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  userObj:any={
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zipCode: '',
    isAcceptedterms: false
  }

  formValue:any;

  onSubmit(){

    this.formValue = this.userObj;
  }

  restForm(){
    this.userObj={
      firstName: '',
      lastName: '',
      username: '',
      city: '',
      state: '',
      zipCode: '',
      isAcceptedterms: false
    }
  }

}
