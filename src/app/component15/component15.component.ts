import { Component } from '@angular/core';
import { Component15FormularioComponent } from "../component15-formulario/component15-formulario.component";
import { Component15TabelaComponent } from "../component15-tabela/component15-tabela.component";

@Component({
  selector: 'app-component15',
  standalone: true,
  imports: [Component15FormularioComponent, Component15TabelaComponent],
  templateUrl: './component15.component.html',
  styleUrl: './component15.component.css'
})
export class Component15Component {
 //Vetor de nomes
 nomes:string[]=['Vinicius', 'Ralf', 'Mauricio', 'Juliana'];
 //Cadastrar nomes
 cadastrar(nome:string){
  this.nomes.push(nome);
 }
}
