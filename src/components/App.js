import React from 'react';
import RecipeList from './RecipeList'
import '../css/app.css'

function App() {
  return (
    <RecipeList recipes = {sampleRecipes}/>
  )
}

const sampleRecipes=[
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions: "1. Put salt on chicken \n2. Cook chicken \n3. Eat chicken",
    ingredients: [
      {id: 1,
        name: "chicken",
        amount: "2 lbs"},
      {id: 2,
        name: "salt",
        amount: "2 tbs"}
    ] 
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 2,
    cookTime: "0:45",
    instructions: "1. Put salt on pork \n2. Cook pork \n3. Eat pork",
    ingredients: [
      {id: 1,
        name: "pork",
        amount: "4 lbs"},
      {id: 2,
        name: "paprika",
        amount: "5 tbs"}
    ] 
  }
]
export default App;