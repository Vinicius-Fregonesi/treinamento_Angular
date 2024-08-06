import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [CommonModule, MediaPipe],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component {
  //Texto
  nome:string='Vinicius';
  //Objeto
  obj:any={'nome': 'Vinicius', 'idade':24};

  //Vetor de objetos
  alunos:any=[
    {'nome':'Ana', 'nota1': 8, 'nota2': 9},
    {'nome':'Julio', 'nota1': 7, 'nota2': 8},
    {'nome':'Letícia', 'nota1': 3, 'nota2': 2},
    {'nome':'Ricardo', 'nota1': 7, 'nota2': 7}
  ];
}
