import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component15-tabela',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component15-tabela.component.html',
  styleUrl: './component15-tabela.component.css'
})
export class Component15TabelaComponent {
  @Input() vetor:string[]=[];
}
