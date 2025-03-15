import ImageHiokiSushi from '../../assets/images/sushi.svg'
import ImageLaDolceVitaTrattoria from '../../assets/images/macaronada.svg'
import ImageBrasileirou from '../../assets/images/feijoada.webp'
import ImageSaborDoAmor from '../../assets/images/saborDoAmor.jpg'
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
    name: 'Restaurante Brasileirou',
    tags: ['Brasileira'],
    image: ImageBrasileirou,
    stars: 5,
    description:
      'Descubra o verdadeiro gosto do Brasil no Restaurante Sabor do Brasil, um espaço acolhedor e vibrante que celebra a rica diversidade da culinária brasileira. Localizado no coração da cidade, nosso restaurante é um convite a uma viagem gastronômica pelos sabores e aromas que fazem do Brasil um país único.',
    type: 'Brasileira'
  },
  {
    id: 4,
    name: 'Sabor do amor',
    tags: ['Brasileira'],
    image: ImageSaborDoAmor,
    stars: 4.3,
    description:
      'Onde cada prato é preparado com carinho e dedicação, trazendo o aconchego das refeições caseiras. Aqui, você encontra uma seleção de comidas simples e deliciosas, que aquecem o coração e alimentam a alma.',
    type: 'Brasileira'
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
