export class Produto{
  id: number;
  produto: string ;
  descricao: string;
  foto: string;
  preco: number;

  constructor(id: number, produto: string, descricao: string, foto:string, preco: number){
      this.id = id;
      this.produto = produto;
      this.descricao = descricao;
      this.foto = foto;
      this.preco =preco;
  }
}