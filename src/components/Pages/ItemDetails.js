import Burger1 from '../../assets/Menu/Burger1.jpg';
import Burger2 from '../../assets/Menu/Burger2.jpg';
import Burger3 from '../../assets/Menu/Burger3.jpg';
import Pizza1 from '../../assets/Menu/Pizza1.jpg';
import Pizza2 from '../../assets/Menu/Pizza2.jpg';
import Pizza3 from '../../assets/Menu/Pizza3.jpg';
import Chowmein1 from '../../assets/Menu/Chowmein1.jpg';
import Chowmein2 from '../../assets/Menu/Chowmein2.jpg';
import Chowmein3 from '../../assets/Menu/Chowmein3.jpg';
import Pasta1 from '../../assets/Menu/Pasta1.jpg';
import Pasta2 from '../../assets/Menu/Pasta2.jpg';
import Pasta3 from '../../assets/Menu/Pasta3.jpg';
import Croissaint1 from '../../assets/Menu/Croissaint1.jpg';
import Croissaint2 from '../../assets/Menu/Croissaint2.jpg';
import Croissaint3 from '../../assets/Menu/Croissaint3.jpg';
import Cake1 from '../../assets/Menu/Cake1.jpg';
import Cake2 from '../../assets/Menu/Cake2.jpg';
import Cake3 from '../../assets/Menu/Cake3.jpg';
import Pastries1 from '../../assets/Menu/Pastries1.jpg';
import Pastries2 from '../../assets/Menu/Pastries2.jpg';
import Pastries3 from '../../assets/Menu/Pastries3.jpg';
import IceCream1 from '../../assets/Menu/Icecream1.jpg';
import IceCream2 from '../../assets/Menu/Icecream2.jpg';
import IceCream3 from '../../assets/Menu/Icecream3.jpg';
import Brownie1 from '../../assets/Menu/Brownie1.jpg';
import Brownie2 from '../../assets/Menu/Brownie2.jpg';
import Brownie3 from '../../assets/Menu/Brownie3.jpg';
import Pudding1 from '../../assets/Menu/Pudding1.jpg';
import Pudding2 from '../../assets/Menu/Pudding2.jpg';
import Pudding3 from '../../assets/Menu/Pudding3.jpg';
import Coffee1 from '../../assets/Menu/Coffee1.jpg';
import Coffee2 from '../../assets/Menu/Coffee2.jpg';
import Coffee3 from '../../assets/Menu/Coffee2.jpg';
import Tea1 from '../../assets/Menu/Tea1.jpg';
import Tea2 from '../../assets/Menu/Tea2.jpg';
import Tea3 from '../../assets/Menu/Tea3.jpg';
import Juice1 from '../../assets/Menu/Juice1.jpg';
import Juice2 from '../../assets/Menu/Juice2.jpg';
import Juice3 from '../../assets/Menu/Juice3.jpg';
import Mojito1 from '../../assets/Menu/Mojito1.jpg';
import Mojito2 from '../../assets/Menu/Mojito2.jpg';
import Mojito3 from '../../assets/Menu/Mojito3.jpg';
import Smoothie1 from '../../assets/Menu/Smoothie1.jpg';
import Smoothie2 from '../../assets/Menu/Smoothie2.jpg';
import Smoothie3 from '../../assets/Menu/Smoothie3.jpg';

const itemDetails = {
  food: {
    burger: [
      { name: 'Cheeseburger', price: '$8', image: Burger1 },
      { name: 'Bacon Burger', price: '$9', image: Burger2 },
      { name: 'Double Cheeseburger', price: '$10', image: Burger3 },
    ],
    pizza: [
      { name: 'Margherita', price: '$10', image: Pizza1 },
      { name: 'Pepperoni', price: '$12', image: Pizza2 },
      { name: 'BBQ Chicken', price: '$14', image: Pizza3 },
    ],
    chowmein: [
      { name: 'Chicken Chowmein', price: '$7', image: Chowmein1 },
      { name: 'Beef Chowmein', price: '$8', image: Chowmein2 },
      { name: 'Vegetable Chowmein', price: '$6', image: Chowmein3 },
    ],
    pasta: [
      { name: 'Spaghetti Bolognese', price: '$9', image: Pasta1 },
      { name: 'Penne Alfredo', price: '$10', image: Pasta2 },
      { name: 'Fettuccine Carbonara', price: '$11', image: Pasta3 },
    ],
    croissant: [
      { name: 'Butter Croissant', price: '$3', image: Croissaint1 },
      { name: 'Almond Croissant', price: '$4', image: Croissaint2 },
      { name: 'Chocolate Croissant', price: '$5', image: Croissaint3 },
    ],
  },
  dessert: {
    cake: [
      { name: 'Chocolate Cake', price: '$5', image: Cake1 },
      { name: 'Vanilla Sponge Cake', price: '$6', image: Cake2 },
      { name: 'Red Velvet Cake', price: '$7', image: Cake3 },
    ],
    pastries: [
      { name: 'Strawberry Tart', price: '$4', image: Pastries1 },
      { name: 'Lemon Meringue Pie', price: '$5', image: Pastries2 },
      { name: 'Eclair', price: '$4.5', image: Pastries3 },
    ],
    icecream: [
      { name: 'Vanilla', price: '$4', image: IceCream1 },
      { name: 'Chocolate', price: '$4', image: IceCream2 },
      { name: 'Strawberry', price: '$4', image: IceCream3 },
    ],
    brownie: [
      { name: 'Classic Brownie', price: '$3', image: Brownie1 },
      { name: 'Walnut Brownie', price: '$3.5', image: Brownie2 },
      { name: 'Chocolate Fudge Brownie', price: '$4', image: Brownie3 },
    ],
    pudding: [
      { name: 'Rice Pudding', price: '$3', image: Pudding1 },
      { name: 'Bread Pudding', price: '$4', image: Pudding2 },
      { name: 'Chocolate Pudding', price: '$4.5', image: Pudding3 },
    ],
  },
  drinks: {
    coffee: [
      { name: 'Espresso', price: '$3', image: Coffee1 },
      { name: 'Latte', price: '$4', image: Coffee2 },
      { name: 'Cappuccino', price: '$4.5', image: Coffee3 },
    ],
    tea: [
      { name: 'Green Tea', price: '$2.5', image: Tea1 },
      { name: 'Black Tea', price: '$2', image: Tea2 },
      { name: 'Herbal Tea', price: '$3', image: Tea3 },
    ],
    juice: [
      { name: 'Orange Juice', price: '$3', image: Juice1 },
      { name: 'Apple Juice', price: '$3', image: Juice2 },
      { name: 'Grape Juice', price: '$3', image: Juice3 },
    ],
    mojito: [
      { name: 'Classic Mojito', price: '$7', image: Mojito1 },
      { name: 'Strawberry Mojito', price: '$8', image: Mojito2 },
      { name: 'Mint Mojito', price: '$7.5', image: Mojito3 },
    ],
    smoothie: [
      { name: 'Berry Smoothie', price: '$5', image: Smoothie1 },
      { name: 'Mango Smoothie', price: '$5', image: Smoothie2 },
      { name: 'Banana Smoothie', price: '$5', image: Smoothie3 },
    ],
  },
};

export default itemDetails;
