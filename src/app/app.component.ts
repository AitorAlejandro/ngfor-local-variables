import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public people: any;

  constructor(private readonly appService: AppService) {
    this.people = this.appService.getPeople();
  }
}
