import { Greeter } from './Greeter';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  ngOnInit() {

    let note = new Greeter("Work is workship")
    console.log(note.greet());
  }
}
