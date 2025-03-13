import ImageHiokiSushi from '../../assets/images/sushi.svg'
import ImageLaDolceVitaTrattoria from '../../assets/images/macaronada.svg'
import RestauranteItem from '../../components/RestauranteItem/RestauranteItem'
import { ListaComp } from './Styles'

const restaurantes = [
  {
    id: 1,
    name: 'Hioki Sushi',
    tags: ['Destaque da semana', 'Japonesa'],
    image: ImageHiokiSushi,
    stars: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    type: 'Japonesa'
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    tags: ['Italiana'],
    image: ImageLaDolceVitaTrattoria,
    stars: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    type: 'Italiana'
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    tags: ['Italiana'],
    image: ImageLaDolceVitaTrattoria,
    stars: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    type: 'Italiana'
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    tags: ['Italiana'],
    image: ImageLaDolceVitaTrattoria,
    stars: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    type: 'Italiana'
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    tags: ['Italiana'],
    image: ImageLaDolceVitaTrattoria,
    stars: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    type: 'Italiana'
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    tags: ['Italiana'],
    image: ImageLaDolceVitaTrattoria,
    stars: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    type: 'Italiana'
  }
]

const ListaRestaurantes = () => {
  return (
    <ListaComp className="container">
      {restaurantes.map((item) => (
        <RestauranteItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          tags={item.tags}
          stars={item.stars}
          description={item.description}
          type={item.type}
        />
      ))}
    </ListaComp>
  )
}

export default ListaRestaurantes
