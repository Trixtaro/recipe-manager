import { FC } from "react";
import { IRecipe } from "../../infrastructure/interfaces/Recipe.interface";

const RecipeElement: FC<{ recipe: IRecipe }> = ({
  recipe,
}: {
  recipe: IRecipe;
}) => {
  return (
    <div className="flex flex-row">
      <div className="w-2/6">{recipe.name}</div>
    </div>
  );
};

export default RecipeElement;
