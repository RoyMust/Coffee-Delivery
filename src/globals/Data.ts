import Coffee1 from '../assets/cofes/Coffee1.png'
import Coffee2 from '../assets/cofes/Coffee2.png'
import Coffee3 from '../assets/cofes/Coffee3.png'
import Coffee4 from '../assets/cofes/Coffee4.png'
import Coffee5 from '../assets/cofes/Coffee5.png'
import Coffee6 from '../assets/cofes/Coffee6.png'
import Coffee7 from '../assets/cofes/Coffee7.png'
import Coffee8 from '../assets/cofes/Coffee8.png'
import Coffee9 from '../assets/cofes/Coffee9.png'
import Coffee10 from '../assets/cofes/Coffee10.png'
import Coffee11 from '../assets/cofes/Coffee11.png'
import Coffee12 from '../assets/cofes/Coffee12.png'
import Coffee13 from '../assets/cofes/Coffee13.png'
import Coffee14 from '../assets/cofes/Coffee14.png'
import { CoffeeProps } from '../Pages/home/components/Card'


interface Coffee extends CoffeeProps {
  id: number;
}

export const CoffeeData: Coffee[] = [
  {
    id: 1,
    image: Coffee1,
    category: ['traditional'],
    title: 'Expresso Tradicional',
    paragraph: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90
  },
  {
    id: 2,
    image: Coffee2,
    category: ['traditional'],
    title: 'American Express',
    paragraph: 'Expresso diluído, menos intenso que o tradicional',
    price: 8.90
  },
  {
    id: 3,
    image: Coffee3,
    category: ['traditional'],
    title: 'Expresso Cremoso',
    paragraph: 'Café expresso tradicional com espuma cremosa',
    price: 10.90
  },
  {
    id: 4,
    image: Coffee4,
    category: ['traditional', 'gelado'],
    title: 'Expresso Gelado',
    paragraph: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90
  },
  {
    id: 5,
    image: Coffee5,
    category: ['traditional', 'com leite'],
    title: 'Café com Leite',
    paragraph: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 11.90
  },
  {
    id: 6,
    image: Coffee6,
    category: ['traditional', 'com leite'],
    title: 'Latte',
    paragraph: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 7.90
  },
  {
    id: 7,
    image: Coffee7,
    category: ['traditional', 'com leite'],
    title: 'Capuccino',
    paragraph: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 7.90
  },
  {
    id: 8,
    image: Coffee8,
    category: ['traditional', 'com leite'],
    title: 'Macchiato',
    paragraph: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 10.90
  },
  {
    id: 9,
    image: Coffee9,
    category: ['traditional', 'com leite'],
    title: 'Mocaccino',
    paragraph: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 8.90
  },
  {
    id: 10,
    image: Coffee10,
    category: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    paragraph: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90
  },
  {
    id: 11,
    image: Coffee11,
    category: ['especial', 'alcólico', 'gelado'],
    title: 'Cubano',
    paragraph: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 13.90
  },
  {
    id: 12,
    image: Coffee12,
    category: ['especial'],
    title: 'Havaiano',
    paragraph: 'Bebida adocicada preparada com café e leite de coco',
    price: 12.90
  },
  {
    id: 13,
    image: Coffee13,
    category: ['especial'],
    title: 'Árabe',
    paragraph: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 14.90
  },
  {
    id: 14,
    image: Coffee14,
    category: ['especial', 'alcólico'],
    title: 'Irlandês',
    paragraph: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 6.90
  },
]