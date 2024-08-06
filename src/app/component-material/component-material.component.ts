import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-component-material',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './component-material.component.html',
  styleUrl: './component-material.component.css'
})
export class ComponentMaterialComponent {

}
