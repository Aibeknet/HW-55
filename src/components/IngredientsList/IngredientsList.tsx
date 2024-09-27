import React from 'react';
import IngredientButton from '../IngredientButton/IngredientButton';
import {INGREDIENTS, Ingredient} from "../../types.ts";

interface IngredientListProps {
    ingredients: Ingredient[];
    addIngredientToBurgerButton: (ingredient: Ingredient) => void;
    deleteIngredientButton: (ingredient: Ingredient) => void;
}

const IngredientsList: React.FC<IngredientListProps> = ({ ingredients, addIngredientToBurgerButton, deleteIngredientButton }) => {
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

export default IngredientsList;
