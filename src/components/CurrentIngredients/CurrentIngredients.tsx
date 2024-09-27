import React from 'react';

interface Ingredient {
    name: string;
    count: number;
}

interface CurrentIngredientsProps {
    ingredients: Ingredient[];
}

const CurrentIngredients: React.FC<CurrentIngredientsProps> = ({ ingredients }) => {
    return (
        <div>
            <div >
                {ingredients.map((ingredient) => (
                    <div key={ingredient.name}>
                        x
                        <span>{ingredient.count}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CurrentIngredients;
