import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component16Component } from "./component16/component16.component";
import { Component17Component } from "./component17/component17.component";
import { Component4Component } from "./component4/component4.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Component16Component, Component17Component, Component4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetoAngular';
}
