import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { aluno } from '../modelo/aluno';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
  selector: 'app-component3',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MediaPipe],
  templateUrl: './component3.component.html',
  styleUrl: './component3.component.css'
})
export class Component3Component {
  btnCadastrar:boolean=true;
  index:number=-1;
  formulario= new FormGroup({
    nome:new FormControl('', [Validators.required,Validators.minLength(3)]),
    nota1:new FormControl(null, [Validators.required,Validators.min(0), Validators.max(10)]),
    nota2:new FormControl(null, [Validators.required,Validators.min(0), Validators.max(10)])
  })
  alunos:aluno[]=[];
  cadastrar(){
    this.alunos.push(this.formulario.value as aluno);
    this.formulario.reset();
  }
  selecionar(index:number){
    this.index= index;
    this.formulario.setValue({
      nome:this.alunos[index].nome,
      nota1:this.alunos[index].nota1,
      nota2:this.alunos[index].nota2
    });
    this.btnCadastrar=false;
  }
  alterar(){
    this.alunos[this.index]=this.formulario.value as aluno;
    this.formulario.reset();
    this.btnCadastrar=true;
  }
  deletar(){
    this.alunos.splice(this.index,1);
    this.formulario.reset();
    this.btnCadastrar=true;
  }
  cancelar(){
    this.formulario.reset();
    this.btnCadastrar=true;
  }
}
