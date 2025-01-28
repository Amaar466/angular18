import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [JsonPipe,DatePipe,UpperCasePipe , LowerCasePipe , TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName: string = 'Angular';
  lastName: string = 'This is demo Session';

  currentDate: Date = new Date();

  student:any = {
    name: 'Angular',
    city:'Lahore',
    age: 25,
  };

}
