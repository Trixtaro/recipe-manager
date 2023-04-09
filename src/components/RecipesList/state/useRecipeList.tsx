import { useEffect, useState } from "react";
import { IRecipe } from "../../../infrastructure/interfaces/Recipe.interface";
import RecipeElement from "../RecipeElement";

export const useRecipesList = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const loadRecipes = () => {
    setRecipes(JSON.parse(localStorage.getItem("recipes") || "[]"));
  };

  const showRecipes = () => {
    if (recipes.length === 0) {
      return (
        <div className="text-center">No hay ingredientes registrados.</div>
      );
    }

    return recipes.map((recipe) => (
      <RecipeElement key={recipe.id} recipe={recipe} />
    ));
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  return {
    values: {},
    functions: {
      showRecipes,
    },
  };
};
