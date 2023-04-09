import { IRecipe } from "../interfaces/Recipe.interface";

export const getRecipeCost = (recipe: IRecipe): number => {
  const cost: number = recipe.ingredients.reduce((acum, value) => {
    return acum + value.ingredient.price * value.amount ?? 0;
  }, 0);

  return cost;
};
