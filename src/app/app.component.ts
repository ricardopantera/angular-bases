import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //viene un array por que pueden ser varios css`s
})
export class AppComponent {
  public title: string = 'Hola mundo';
}
