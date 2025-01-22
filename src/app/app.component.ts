import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { AttributedirectivComponent } from './attributedirectiv/attributedirectiv.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddEmployeeComponent, ListEmployeeComponent , DataBindingComponent ,StructuralDirectiveComponent,AttributedirectivComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDo List';
}
