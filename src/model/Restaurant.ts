import Menu from './Menu'

class Restautant {
  id: number
  titulo: string
  tipo: string
  descricao: string
  capa: string
  avaliacao: number
  destacado: boolean
  cardapio: Menu[]

  constructor(
    id: number,
    titulo: string,
    tipo: string,
    descricao: string,
    capa: string,
    avaliacao: number,
    destacado: boolean,
    cardapio: Menu[]
  ) {
    this.id = id
    this.titulo = titulo
    this.tipo = tipo
    this.descricao = descricao
    this.capa = capa
    this.avaliacao = avaliacao
    this.destacado = destacado
    this.cardapio = cardapio
  }
}

export default Restautant
