import React, { useState } from 'react';
import IngredientsList from '../IngredientsList/IngredientsList.tsx';
import TotalPrice from '../TotalPrice/TotalPrice.tsx';
import {Ingredient} from '../../types.ts';

const BurgerConstructor: React.FC = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([
        { name: 'Meat', price: 80, image: '', count: 0 },
        { name: 'Cheese', price: 50, image: '', count: 0 },
        { name: 'Salad', price: 10, image: '', count: 0 },
        { name: 'Bacon', price: 60, image: '', count: 0 },
    ]);

    const addIngredient = (ingredient: { name: string; price: number; image: string }) => {
        setIngredients(prevIngredients => {
            return prevIngredients.map(i =>
                i.name === ingredient.name ? { ...i, count: i.count + 1 } : i
            );
        });
    };

    const deleteIngredient = (ingredient: Ingredient) => {
        setIngredients(prevIngredients => {
            return prevIngredients.map(i =>
                i.name === ingredient.name && i.count > 0 ? { ...i, count: i.count - 1 } : i
            );
        });
    };

    const totalPrice = () => {
        const basePrice = 30;
        const ingredientPrices: { [key: string]: number } = {
            Meat: 80,
            Cheese: 50,
            Salad: 10,
            Bacon: 60,
        };

        const ingredientsPrice = ingredients.reduce((acc, ingredient) => {
            return acc + (ingredientPrices[ingredient.name] * ingredient.count);
        }, 0);

        return basePrice + ingredientsPrice;
    };

    return (
        <div className="burger-app">
            <div className="ingredients-box">
                <h2>Ingredients</h2>
                <IngredientsList
                    ingredients={ingredients}
                    addIngredientToBurgerButton={addIngredient}
                    deleteIngredientButton={deleteIngredient}
                />
            </div>

            <div>
                <h2 style={{marginTop: '45px'}}>Burger</h2>
                <div className="Burger">
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                    {ingredients.map(ingredient => {
                        return Array.from({length: ingredient.count}).map((index) => (
                            <div
                                key={`${ingredient.name}-${index}`}
                                className={ingredient.name}>
                            </div>
                        ));
                    })}
                    <div className="BreadBottom"></div>
                    <TotalPrice price={totalPrice()}/>
                </div>
            </div>
        </div>
    );
};

export default BurgerConstructor;

