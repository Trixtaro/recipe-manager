import { IRecipeIngredient } from "./RecipeIngredient.interface";

export interface IRecipe {
  id: number | null;
  name: string;
  ingredients: IRecipeIngredient[];
}
