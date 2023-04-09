import { FC, Fragment } from "react";
import RecipesHeader from "./RecipesHeader";
import { useRecipesList } from "./state/useRecipeList";

const RecipesList: FC = () => {
  const { functions } = useRecipesList();

  return (
    <div>
      <h2 className="font-bold mb-2 text-xl">Lista de recetas</h2>
      <RecipesHeader />
      <Fragment>{functions.showRecipes()}</Fragment>
    </div>
  );
};

export default RecipesList;
