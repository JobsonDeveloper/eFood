import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import ImagemEsfirra from '../../assets/images/esfirra.svg'
import ImagemTamaki from '../../assets/images/temaki.jpg'
import CardapioItem from '../../components/CardapioItem/CardapioItem'
import { CardapioListComp } from './Styles'

const cardapioLaDolceVitaTrattoria = [
  {
    id: 1,
    image: ImagemEsfirra,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      emphasis: 'Serve: de 2 a 3 pessoas',
      details: 'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
      value: 60.90
  },
  {
    id: 2,
    image: ImagemEsfirra,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      emphasis: 'Serve: de 2 a 3 pessoas',
      details: 'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
      value: 60.90
  },
  {
    id: 3,
    image: ImagemEsfirra,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      emphasis: 'Serve: de 2 a 3 pessoas',
      details: 'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
      value: 60.90
  }
]

const cardapioHiokiSushi = [
  {
    id: 1,
    image: ImagemTamaki,
    name: 'Temaki',
    description:
      'Este cone feito de algas secas e crocantes caiu definitivamente no gosto dos brasileiros. Ele pode trazer os mais diferentes recheios, porém os mais comuns são atum, pepino, kani e salmão cru ou grelhado, todos com arroz. Para acompanhar, molho shoyu. Temaki é um tipo de sushi, sendo que “te” significa “mão” e “maki”, “enrolado”.'
  },
  {
    id: 2,
    image: ImagemTamaki,
    name: 'Temaki',
    description:
      'Este cone feito de algas secas e crocantes caiu definitivamente no gosto dos brasileiros. Ele pode trazer os mais diferentes recheios, porém os mais comuns são atum, pepino, kani e salmão cru ou grelhado, todos com arroz. Para acompanhar, molho shoyu. Temaki é um tipo de sushi, sendo que “te” significa “mão” e “maki”, “enrolado”.'
  },
  {
    id: 3,
    image: ImagemTamaki,
    name: 'Temaki',
    description:
      'Este cone feito de algas secas e crocantes caiu definitivamente no gosto dos brasileiros. Ele pode trazer os mais diferentes recheios, porém os mais comuns são atum, pepino, kani e salmão cru ou grelhado, todos com arroz. Para acompanhar, molho shoyu. Temaki é um tipo de sushi, sendo que “te” significa “mão” e “maki”, “enrolado”.'
  },
  {
    id: 4,
    image: ImagemTamaki,
    name: 'Temaki',
    description:
      'Este cone feito de algas secas e crocantes caiu definitivamente no gosto dos brasileiros. Ele pode trazer os mais diferentes recheios, porém os mais comuns são atum, pepino, kani e salmão cru ou grelhado, todos com arroz. Para acompanhar, molho shoyu. Temaki é um tipo de sushi, sendo que “te” significa “mão” e “maki”, “enrolado”.'
  }
]

const ListaCardapio = () => {
  const { restaurantName: name } = useSelector(
    (state: RootReducer) => state.restaurantSelected
  )

  return (
    <CardapioListComp className='container'>
      {name === 'La Dolce Vita Trattoria' &&
        cardapioLaDolceVitaTrattoria.map((item) => (
          <CardapioItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            details={item.details}
            emphasis={item.emphasis}
            value={item.value}
          />
        ))}
    </CardapioListComp>
  )
}

export default ListaCardapio
