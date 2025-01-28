import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-reative-form',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reative-form.component.html',
  styleUrl: './reative-form.component.css'
})
export class ReativeFormComponent {

  studentForm = new FormGroup({
    firstName: new FormControl('' , [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(''),
    username: new FormControl('' ,[Validators.required, Validators.email]),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl(''),
    isAcceptedterms: new FormControl('')
  });
  formValues: any;

  onSave() {
    this.formValues = this.studentForm.value;
    console.log(this.formValues);
  }
}
