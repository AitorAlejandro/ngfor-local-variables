import { Component } from '@angular/core';
import { AppService } from './app.service';
import { People } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public people: People[];

  constructor(private readonly appService: AppService) {
    this.people = this.appService.getPeople();
  }
}
