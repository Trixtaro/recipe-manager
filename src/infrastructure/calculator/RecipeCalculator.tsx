import { IIngredient } from "../interfaces/Ingredient.interface";
import { IRecipe } from "../interfaces/Recipe.interface";
import { IRecipeIngredient } from "../interfaces/RecipeIngredient.interface";

export const getRecipeCost = (ingredients: IRecipeIngredient[]): number => {
  const cost: number = ingredients.reduce((acum, value) => {
    return acum + value.ingredient.price * value.amount ?? 0;
  }, 0);

  return cost;
};

export const HaveStockToPrepare = (
  ingredients: IIngredient[],
  recipe: IRecipe
): boolean => {
  let haveStock = true;

  recipe.ingredients.forEach((rcpIng) => {
    haveStock =
      haveStock &&
      rcpIng.amount <=
        (ingredients.find((ing) => ing.id === rcpIng.ingredient.id)?.quantity ??
          0);
  });

  return haveStock;
};
