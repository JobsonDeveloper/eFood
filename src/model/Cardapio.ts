class Cardapio {
  id: number
  image: string
  name: string
  emphasis: string
  description: string
  details: string
  value: number

  constructor(id: number,
    image: string,
    name: string,
    emphasis: string,
    description: string,
    details: string,
    value: number) {
        this.id = id
        this.image = image
        this.name = name
        this.emphasis = emphasis
        this.description = description
        this.details = details
        this.value = value
    }
}

export default Cardapio