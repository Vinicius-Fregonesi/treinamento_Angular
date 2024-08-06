import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {
  //objeto formulário
  formulario = new FormGroup({
    nome:new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade:new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade:new FormControl('', [Validators.required, Validators.minLength(3)])
  });
  //Visibilidade dos botões
  btnCadastrar:boolean=true;
  //vertor
  vetor:Pessoa[]=[];
  //Armazenar indice da pessoa selecionada;
  indice:number=-1;
  //Função de cadastro
  cadastrar(){
    //cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa);

    //limpeza de inputs
    this.formulario.reset();
    //visualizar via consoles
    //console.table(this.vetor);
    //Função seleção
    
    }
    selecionar(indice:number){
      //Atribuir o indíce da pessoa
      this.indice= indice;
      //Atribuir os dados da pessoa no formulário
      this.formulario.setValue({
        nome:this.vetor[indice].nome,
        idade:this.vetor[indice].idade,
        cidade:this.vetor[indice].cidade,
      });
      //visibilidade dos botões
      this.btnCadastrar=false;
    }
    //função de alterar
    alterar(){
      //Alterar o vetor
      this.vetor[this.indice]= this.formulario.value as Pessoa;
      //limpar inputs
      this.formulario.reset();
      //visibilidade do botão cadastrar
      this.btnCadastrar=true;
    }
    //função de remover
    remover(){
      //Removendo a pessoa do Vetor
      this.vetor.splice(this.indice, 1);
      //Limpeza de inputs
      this.formulario.reset();
      //visibilidade do botão cadastrar
      this.btnCadastrar=true;
    }
    //função de cancelar
    cancelar(){
      //Limpeza de inputs
      this.formulario.reset();
      //visibilidade do botão cadastrar
      this.btnCadastrar=true;
    }
}
