import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import ImagemEsfirra from '../../assets/images/esfirra.svg'
import ImagemLasagna from '../../assets/images/lasanha.jpg'
import ImagemRisoto from '../../assets/images/risotto.jpg'
import ImagemTamaki from '../../assets/images/temaki.jpg'
import ImagemArrozFrito from '../../assets/images/arrozFrito.png'
import ImagemKungPaoChicken from '../../assets/images/KungPaoChicken.jpg'
import ImagemMoqueca from '../../assets/images/moqueca.jpg'
import ImagemAcaraje from '../../assets/images/acaraje.jpg'
import ImagemFeijoada from '../../assets/images/feijoada.png'
import ImagemFeijaoTropeiro from '../../assets/images/FeijaoTropeiro.jpg'
import ImagemBaiaodeDois from '../../assets/images/BaiaodeDois.png'
import ImagemFrangoaParmegiana from '../../assets/images/FrangoaParmegiana.png'
import CardapioItem from '../../components/CardapioItem/CardapioItem'
import { CardapioListComp } from './Styles'
import { useEffect, useState } from 'react'
import Cardapio from '../../model/Cardapio'

type Props = {
  itens: Cardapio[]
}

const cardapioLaDolceVitaTrattoria = [
  {
    id: 1,
    image: ImagemEsfirra,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    emphasis: 'Serve: de 2 a 3 pessoas',
    details:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    value: 60.9
  },
  {
    id: 2,
    image: ImagemLasagna,
    name: 'Lasagna',
    description:
      'Uma deliciosa camada de massa intercalada com carne moída, molho de tomate, queijo ricota e queijo mozzarella, assada até ficar dourada e borbulhante.',
    emphasis: 'Serve: de 3 a 4 pessoas',
    details:
      'Feita com camadas generosas de massa fresca, recheada com uma suculenta mistura de carne moída temperada e um molho de tomate rico e aromático. Para um toque especial, adicionamos um cremoso molho béchamel e uma combinação perfeita de queijos, incluindo ricota e mozzarella, que derretem e formam uma crosta dourada e irresistível. Cada garfada é uma explosão de sabor e conforto, ideal para compartilhar com amigos e familiares. Venha saborear essa delícia que traz o calor da cozinha italiana para a sua mesa!',
    value: 75.5
  },
  {
    id: 3,
    image: ImagemRisoto,
    name: 'Risotto',
    description:
      'Um prato cremoso feito com arroz arbóreo, cozido lentamente em caldo, e frequentemente enriquecido com ingredientes como cogumelos, frutos do mar ou legumes, finalizado com queijo parmesão.',
    emphasis: 'Serve: de 2 a 3 pessoas',
    details:
      'Mergulhe na cremosidade e no sabor do nosso delicioso risotto! Este prato clássico italiano é preparado com arroz arbóreo, conhecido por sua textura única e capacidade de absorver sabores. Cozido lentamente em um rico caldo, cada grão se transforma em uma verdadeira obra-prima, envolto em um molho aveludado que derrete na boca. Escolha entre nossas opções irresistíveis: desde o tradicional risotto de cogumelos, com seu sabor terroso e aromático, até o sofisticado risotto de frutos do mar, que traz o frescor do mar em cada garfada.',
    value: 43.0
  }
]

const cardapioHiokiSushi = [
  {
    id: 4,
    image: ImagemTamaki,
    name: 'Temaki',
    emphasis: 'Serve: de 1 a 2 pessoas',
    description:
      'Este cone feito de algas secas e crocantes caiu definitivamente no gosto dos brasileiros. Ele pode trazer os mais diferentes recheios, porém os mais comuns são atum, pepino, kani e salmão cru ou grelhado, todos com arroz. Para acompanhar, molho shoyu. Temaki é um tipo de sushi, sendo que “te” significa “mão” e “maki”, “enrolado”.',
    details:
      'O temaki é um prato clássico da gastronomia japonesa que é considerado um tipo de sushi por ser um rolinho de arroz recheado com peixes ou vegetais e envolto em alga. A diferença entre temaki e o sushi enrolado é que o primeiro é grande e enrolado em forma de cone em vez de em forma de um cilindro pequeno. Ele também não possui camadas de arroz e alga como os sushis enrolados e intercalados. Como é maior, o temaki costuma ter mais recheio do que arroz. Por causa do formato, o temaki é comido com as mãos, então você não precisa se envergonhar de comer se não souber usar hashi',
    value: 50.25
  },
  {
    id: 5,
    image: ImagemArrozFrito,
    name: 'Fried Rice',
    emphasis: 'Serve: 1 pessoa',
    description:
      'Um prato popular que consiste em arroz cozido, geralmente misturado com vegetais, ovos e proteínas como frango, camarão ou porco, tudo salteado em wok com molho de soja e temperos. É uma refeição saborosa e versátil, perfeita para aproveitar sobras de arroz.',
    details:
      'Descubra o irresistível sabor do nosso Arroz Frito, um clássico da culinária chinesa que vai conquistar seu paladar! Feito com arroz cozido e salteado na perfeição, este prato é uma explosão de sabores e texturas. Cada porção é cuidadosamente preparada com uma mistura colorida de vegetais frescos, como cenouras, ervilhas e cebolinhas, além de ovos mexidos que trazem cremosidade. Para completar, você pode escolher entre suculentos pedaços de frango, camarão ou porco, todos envolvidos em um molho de soja aromático que realça cada ingrediente.',
    value: 15.5
  },
  {
    id: 6,
    image: ImagemKungPaoChicken,
    name: 'Kung Pao Chicken',
    emphasis: 'Serve: de 1 a 2 pessoas',
    description:
      'Um prato picante e saboroso feito com cubos de frango, amendoins, pimentões e cebolas, tudo cozido em um molho à base de molho de soja, vinagre e pimenta. É conhecido por seu equilíbrio entre o sabor picante e o crocante dos amendoins, sendo uma escolha popular em restaurantes chineses.',
    details:
      'Prepare-se para uma experiência gastronômica inesquecível com nosso Kung Pao Chicken! Este prato icônico da culinária chinesa combina suculentos pedaços de frango, salteados até ficarem dourados, com uma mistura vibrante de pimentões crocantes e cebolas aromáticas. O verdadeiro destaque do Kung Pao é seu molho irresistível, que equilibra o sabor picante e adocicado, trazendo um toque de molho de soja, vinagre e pimenta. Para um crocante especial, adicionamos amendoins torrados, que proporcionam uma textura deliciosa e um sabor extra.',
    value: 90.99
  }
]

const cardapioBrasileirou = [
  {
    id: 7,
    image: ImagemFeijoada,
    name: 'Feijoada',
    description:
      'Prato tradicional brasileiro, conhecido por sua riqueza de sabores e pela combinação de ingredientes. Feita à base de feijão preto, a feijoada é cozida lentamente com uma variedade de carnes, como carne de porco, linguiça, carne seca e costela, que se entrelaçam em um caldo saboroso e encorpado.',
    emphasis: 'Serve: de 4 a 5 pessoas',
    details:
      'A feijoada é um prato tradicional brasileiro, conhecido por sua riqueza de sabores e pela combinação de ingredientes. Feita à base de feijão preto, a feijoada é cozida lentamente com uma variedade de carnes, como carne de porco, linguiça, carne seca e costela, que se entrelaçam em um caldo saboroso e encorpado. Servida geralmente com arroz branco, couve refogada, farofa e laranja, a feijoada é mais do que uma refeição; é uma verdadeira celebração da cultura brasileira, frequentemente compartilhada em almoços em família e encontros com amigos. Cada garfada traz um pedacinho da tradição e do calor da cozinha caseira, tornando-a um prato amado em todo o país.',
    value: 75.45
  },
  {
    id: 8,
    image: ImagemMoqueca,
    name: 'Moqueca',
    description:
      'Um prato tradicional de peixe ou frutos do mar, a moqueca é cozida com cebola, tomate, pimentão, coentro e leite de coco, resultando em um sabor rico e aromático. Existem variações regionais, como a moqueca baiana, que leva azeite de dendê, e a moqueca capixaba, que é mais leve e não utiliza dendê. É geralmente servida com arroz e farofa, proporcionando uma refeição deliciosa e reconfortante.',
    emphasis: 'Serve: de 3 a 4 pessoas',
    details:
      'Deixe-se levar pela riqueza e os aromas da nossa Moqueca, um prato tradicional que é um verdadeiro tesouro da culinária brasileira! Feita com peixe fresco ou frutos do mar, a moqueca é cozida lentamente em um molho vibrante de cebolas, tomates, pimentões e coentro, tudo envolto em um cremoso leite de coco que traz um toque especial. Cada garfada é uma explosão de sabores tropicais, com a combinação perfeita de temperos que aquecem o coração. Servida com arroz branquíssimo e farofa crocante, a moqueca é ideal para compartilhar em almoços em família ou encontros com amigos.',
    value: 65.15
  },
  {
    id: 9,
    image: ImagemAcaraje,
    name: 'Acarajé',
    description:
      'Uma iguaria da culinária baiana, o acarajé é feito de massa de feijão-fradinho, moldada em bolinhos e frita em azeite de dendê. Geralmente, é recheado com vatapá (um creme de pão, camarão e temperos) e caruru (um prato à base de quiabo), e servido com pimenta. O acarajé é um símbolo da cultura afro-brasileira e é muito apreciado nas ruas da Bahia.',
    emphasis: 'Serve: de 1 a 2 pessoas',
    details:
      'Descubra o sabor irresistível do nosso Acarajé, uma iguaria tradicional da culinária baiana que vai conquistar seu paladar! Feito com massa de feijão-fradinho, moldado em bolinhos e frito em azeite de dendê, o acarajé é crocante por fora e macio por dentro, trazendo a essência da Bahia em cada mordida. Recheado com um delicioso vatapá — um creme de pão, camarão e temperos — e caruru, à base de quiabo, o acarajé é servido com uma pitada de pimenta para aqueles que gostam de um toque picante. É uma verdadeira festa de sabores que representa a rica cultura afro-brasileira.',
    value: 12.2
  }
]

const cardapioSaborDoAmor = [
  {
    id: 8,
    image: ImagemFeijaoTropeiro,
    name: 'Feijão Tropeiro',
    description:
      'Um prato típico que combina feijão, geralmente feijão-mexido, com farinha de mandioca, bacon, linguiça, ovos e temperos. É uma refeição saborosa e reconfortante, frequentemente servida como acompanhamento ou prato principal.',
    emphasis: 'Serve: de 4 a 5 pessoas',
    details:
      'Venha se deliciar com o nosso Feijão Tropeiro, um prato típico que traz a essência da culinária brasileira! Feito com feijão-mexido, este prato é uma verdadeira explosão de sabores, combinando ingredientes frescos e caseiros. Preparado com uma mistura perfeita de feijão, farinha de mandioca, bacon crocante, linguiça e ovos, o Feijão Tropeiro é temperado com cebola, alho e especiarias que realçam seu sabor. Cada garfada é uma viagem ao coração do Brasil, repleta de tradição e aconchego.',
    value: 44.15
  },
  {
    id: 9,
    image: ImagemBaiaodeDois,
    name: 'Baião de Dois',
    description:
      'Uma deliciosa mistura de arroz e feijão verde ou feijão-de-corda, cozidos juntos com temperos como cebola, alho e coentro. Muitas vezes, é enriquecido com queijo coalho, carne seca ou charque, tornando-se uma refeição completa e cheia de sabor.',
    emphasis: 'Serve: de 3 a 4 pessoas',
    details:
      'Descubra o sabor autêntico do nosso Baião de Dois, um prato tradicional que é um verdadeiro ícone da culinária nordestina! Feito com uma deliciosa combinação de arroz e feijão verde ou feijão-de-corda, este prato é cozido lentamente com temperos frescos, como cebola, alho e coentro, que realçam seu sabor. Enriquecido com pedaços de queijo coalho e carne seca ou charque, o Baião de Dois é uma refeição completa e reconfortante, perfeita para aquecer o coração. Cada garfada traz a essência do Nordeste, celebrando a riqueza dos ingredientes locais e a tradição da cozinha caseira.',
    value: 60.35
  },
  {
    id: 10,
    image: ImagemFrangoaParmegiana,
    name: 'Frango à Parmegiana',
    description:
      'Um prato muito popular, consiste em filé de frango empanado, frito e coberto com molho de tomate e queijo derretido. Geralmente é servido com arroz e batata frita, sendo uma opção reconfortante e saborosa em muitos restaurantes.',
    emphasis: 'Serve: de 1 a 2 pessoas',
    details:
      'Deixe-se seduzir pelo nosso irresistível Frango à Parmegiana, um prato que é sinônimo de conforto e sabor! Feito com suculentos filés de frango empanados e fritos até ficarem dourados, este clássico é coberto com um delicioso molho de tomate caseiro e uma generosa camada de queijo derretido, que se transforma em uma crosta irresistível. Servido com arroz branquíssimo e batatas fritas crocantes, o Frango à Parmegiana é a escolha perfeita para um almoço em família ou um jantar especial. Cada garfada é uma explosão de sabores que traz aconchego e satisfação, fazendo deste prato um dos favoritos em muitos lares brasileiros.',
    value: 10.00
  }
]

const ListaCardapio = () => {
  const { restaurantName: name } = useSelector(
    (state: RootReducer) => state.restaurantSelected
  )
  const [cardapio, setCardapio] = useState<Props>({
    itens: []
  })

  useEffect(() => {
    switch (name) {
      case 'La Dolce Vita Trattoria':
        setCardapio({
          itens: cardapioLaDolceVitaTrattoria
        })
        break
      case 'Hioki Sushi':
        setCardapio({
          itens: cardapioHiokiSushi
        })
        break
      case 'Restaurante Brasileirou':
        setCardapio({
          itens: cardapioBrasileirou
        })
        break
      case 'Sabor do amor':
        setCardapio({
          itens: cardapioSaborDoAmor
        })
        break
      default:
        break
    }
  }, [name])

  return (
    <CardapioListComp className="container">
      {cardapio.itens.map((item) => (
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
