import React from 'react';
import IngredientButton from '../IngredientButton/IngredientButton.tsx';
import { INGREDIENTS, Ingredient } from '../../types';

interface IngredientListProps {
    ingredients: Ingredient[];
    addIngredientToBurgerButton: (ingredient: Ingredient) => void;
    deleteIngredientButton: (ingredient: Ingredient) => void;
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients, addIngredientToBurgerButton, deleteIngredientButton }) => {
    return (
        <div>
            {INGREDIENTS.map(ingredient => {
                const currentIngredient = ingredients.find(i => i.name === ingredient.name);
                return (
                    <IngredientButton
                        key={ingredient.name}
                        ingredient={{ ...ingredient, count: currentIngredient ? currentIngredient.count : 0 }}
                        addIngredientToBurgerButton={addIngredientToBurgerButton}
                        deleteIngredientButton={deleteIngredientButton}
                    />
                );
            })}
        </div>
    );
};

export default IngredientList;
