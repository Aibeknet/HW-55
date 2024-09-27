import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';

export interface Ingredient {
    name: string;
    price: number;
    image: string;
    count: number;
}

export const INGREDIENTS: Ingredient[] = [
    { name: 'Meat', price: 80, image: meatImage, count: 0},
    { name: 'Cheese', price: 50, image: cheeseImage, count: 0},
    { name: 'Salad', price: 10, image: saladImage, count: 0},
    { name: 'Bacon', price: 60, image: baconImage, count: 0},
];
