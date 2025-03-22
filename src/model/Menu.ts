class Menu {
  id: number
  nome: string
  foto: string
  descricao: string
  porcao: string
  preco: number

  constructor(
    id: number,
    nome: string,
    foto: string,
    descricao: string,
    porcao: string,
    preco: number
  ) {
    this.id = id
    this.nome = nome
    this.foto = foto
    this.descricao = descricao
    this.porcao = porcao
    this.preco = preco
  }
}

export default Menu
