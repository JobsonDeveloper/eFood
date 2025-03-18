import Cardapio from './Cardapio'

class Restautante {
  id: number
  titulo: string
  tipo: string
  descricao: string
  capa: string
  avaliacao: number
  destacado: boolean
  cardapio: Cardapio[]

  constructor(
    id: number,
    titulo: string,
    tipo: string,
    descricao: string,
    capa: string,
    avaliacao: number,
    destacado: boolean,
    cardapio: Cardapio[]
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

export default Restautante
