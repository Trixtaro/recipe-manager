import { useEffect, useState } from "react";
import { IRecipe } from "../../../infrastructure/interfaces/Recipe.interface";
import RecipeElement from "../RecipeElement";
import {
  useIngriedientStore,
  useRecipeStore,
} from "../../../infrastructure/hooks/useStore";
import { IIngredient } from "../../../infrastructure/interfaces/Ingredient.interface";

export const useRecipesList = () => {
  const { loadRecipes } = useRecipeStore();
  const { loadIngredients, consumeIngredientsFromRecipe } =
    useIngriedientStore();
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  const handlePrepareRecipe = (recipe: IRecipe) => {
    consumeIngredientsFromRecipe(recipe);
    setRecipes(loadRecipes());
    setIngredients(loadIngredients());
  };

  const showRecipes = () => {
    if (recipes.length === 0) {
      return (
        <div className="text-center">No hay ingredientes registrados.</div>
      );
    }

    return recipes.map((recipe) => (
      <RecipeElement
        key={recipe.id}
        recipe={recipe}
        ingredients={ingredients}
        onPrepare={handlePrepareRecipe}
      />
    ));
  };

  useEffect(() => {
    setRecipes(loadRecipes());
    setIngredients(loadIngredients());
  }, []);

  return {
    values: {
      recipes,
      ingredients,
    },
    functions: {
      showRecipes,
    },
  };
};
