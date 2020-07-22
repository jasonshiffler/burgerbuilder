import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = obj2Array(props.ingredients).map(
    (ingredient) => {
      return <BurgerIngredient type={ingredient}></BurgerIngredient>;
    }
  );

  if (doIngredientsExist(transformedIngredients) === false) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'></BurgerIngredient>
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom'></BurgerIngredient>
    </div>
  );
};

//Takes the ingredient object and transforms it into an array with all of the ingredients so we can loop through it with a map
function obj2Array(ingredientObj) {
  const ingredientNames = Object.keys(ingredientObj);
  const ingredientNumbers = Object.values(ingredientObj);
  const ingredientArray = [];
  let index = 0;

  for (const ingredientName of ingredientNames) {
    for (let i = 0; i < ingredientNumbers[index]; i++) {
      ingredientArray.push(ingredientName);
    }
    index++;
  }
  return ingredientArray;
}

export default burger;

//Checks to see if we have any ingredients in our list
function doIngredientsExist(ingredientObj) {
  const ingredientNumbers = Object.values(ingredientObj);
  console.log(ingredientNumbers);
  const sum = ingredientNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  if (sum === 0) {
    return false;
  } else {
    return true;
  }
}
