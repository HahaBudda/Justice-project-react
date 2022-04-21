import banana from '../../Assets/92f1ea7dcce3b5d06cd1b1418f9b9413 3.png'
import potato from '../../Assets/pngfuel 3.png'
import perchick from '../../Assets/Group 6858.png'
import eggNoodle from '../../Assets/egg-noodle (1) 2.png'
import noodle from '../../Assets/Group 6848.png'
import coke from '../../Assets/pngfuel 11.png'
import sprite from '../../Assets/pngfuel 12.png'
import cocaKola from '../../Assets/pngfuel 13.png'
import pepsi from '../../Assets/pngfuel 14.png'
import egg from '../../Assets/pngfuel 16.png'

const product = [
  {
    category : 'Beverages',
    image: sprite,
    id: Date.now(),
    description: '325ml',
    name: 'Sprite Can',
    price: '$4.2'
  },
  {
    category : 'Beverages',
    image: coke,
    id: Date.now(),
    description: '325ml',
    name: 'Diet Coke',
    price: '$4.99'
  },
  {
    category : 'Beverages',
    image: cocaKola,
    id: Date.now(),
    description: '325ml',
    name: 'Coca Cola Can',
    price: '$4.99'
  },
  {
    category : 'Beverages',
    image: pepsi,
    id: Date.now(),
    description: '330ml',
    name: 'Pepsi Can',
    price: '$4.99'
  },
  {
    category : 'Fresh Fruits',
    image: perchick,
    id: Date.now(),
    description: '1kg',
    name: 'Bell Pepper Red',
    price: '$2.99'
  },
  {
    category : 'Pasta',
    image: egg,
    id: Date.now(),
    description: '4pcs',
    name: 'Egg Chicken',
    price: '$1.99'
  },
  {
    category : 'Fresh Fruits',
    image: potato,
    id: Date.now(),
    description: '1kg',
    name: 'Potato',
    price: '$6.99'
  },
  {
    category : 'Fresh Fruits',
    image: banana,
    id: Date.now(),
    description: '1kg',
    name: 'Organic Bananas',
    price: '$6.66'
  },
  {
    category : 'Pasta',
    image: noodle,
    id: Date.now(),
    description: '100gm',
    name: 'Egg pasta',
    price: '$1.42'
  },
  {
    category : 'Pasta',
    image: eggNoodle,
    id: Date.now(),
    description: '166gm',
    name: 'Egg noodles',
    price: '$2.99'
  },
]
export default product;