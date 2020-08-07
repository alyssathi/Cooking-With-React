import React from 'react'
import IngredientsList from './IngredientsList';

export default function Recipe(props) {
    const {
        name,
        cookTime,
        servings,
        instructions,
        ingredients,
    } = props;

    return (
        <div>
            <div class >
                <h3>{name}</h3>
                <div>
                    <button className= "btn btn--primary">Edit</button>
                    <button className= "btn btn--danger">Delete</button>
                </div>
            </div>
            <div>
                <span>Cook Time: </span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>Servings: </span>
                <span>{servings}</span>
            </div>
            <div>
                <div>Instructions: </div>
                <div>{instructions}</div>
            </div>
                <div>Ingredients:</div>
                <div>
                    <IngredientsList ingredients = {ingredients} />
                </div>
        </div>
    )
}
