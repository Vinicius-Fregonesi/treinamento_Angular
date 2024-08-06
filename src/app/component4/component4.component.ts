import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-component4',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './component4.component.html',
  styleUrl: './component4.component.css'
})
export class Component4Component {
  //vetor
  vetor:Produto[]=[];
  //Visibilidade dos botões
  btnCadastrar:boolean=true;
  //Objeto de formulário
  formulario= new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    valor: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(99999999)])
  });
  formPesquisa=new FormGroup({
    pesquisa: new FormControl('')
  });
  constructor(private servico:ProdutoService){}
  //inicialização do component
  ngOnInit(){
    this.selecionar();
  }
  //Método de selecionar todos os produtos
  selecionar(){
    this.servico.selecionar().subscribe(retorno=>{this.vetor=retorno});
  }
  cadastrar(){
    let nomeIgual = this.vetor.some(elemento => elemento.nome === this.formulario.value.nome);
    if(!nomeIgual){
      let tamanhoId=this.vetor.length+1;
      this.formulario.value.id= tamanhoId.toString();
      this.servico.cadastrar(this.formulario.value as Produto).subscribe(retorno=>{
        this.vetor.push(retorno);
        this.formulario.reset();
      });
    } else{
      alert("Não é possível cadastrar, pois existe um produto com esse nome");
      this.formulario.reset();
    }
  }
  //Selecionar Produto especifico
  selecionarProduto(indice:number){
    this.formulario.setValue({
      id:this.vetor[indice].id,
      nome:this.vetor[indice].nome,
      valor:this.vetor[indice].valor
    });
    this.btnCadastrar= false;
  }
  //Método para alterar produto
  alterar(){
    this.servico.alterar(this.formulario.value as Produto).subscribe(retorno=>{
      //encontra o objeto alterado no vetor
      let indiceAlterado= this.vetor.findIndex(obj=>{
        //retorna o id do objeto
        return this.formulario.value.id===obj.id;
      });
      this.vetor[indiceAlterado] = retorno;
      this.formulario.reset();
      this.btnCadastrar=true;
    })
  }
  remover(){
    this.servico.remover(this.formulario.value.id).subscribe(()=>{
      let indiceRemovido= this.vetor.findIndex(obj=>{
        return obj.id===this.formulario.value.id
      });
      //Remover objeto do vetor
      this.vetor.splice(indiceRemovido, 1);
      //Limpar o formulário
      this.formulario.reset();
      //Visibilidade dos botões
      this.btnCadastrar= true;
    })
  }
  filtrarProdutos():Produto[]{
    const pesquisa = this.formPesquisa.value.pesquisa.toLowerCase();
    return this.vetor.filter(produto => produto.nome.toLowerCase().includes(pesquisa));
  }
}
