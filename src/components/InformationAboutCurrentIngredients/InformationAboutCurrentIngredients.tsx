import React from 'react';

interface Ingredient {
    name: string;
    count: number;
}

interface InformationAboutCurrentIngredientsProps {
    ingredients: Ingredient[];
}

const InformationAboutCurrentIngredients: React.FC<InformationAboutCurrentIngredientsProps> = ({ ingredients }) => {
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

export default InformationAboutCurrentIngredients;
