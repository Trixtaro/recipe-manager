import { FC, useEffect, useState } from "react";
import { IRecipe } from "../../infrastructure/interfaces/Recipe.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as blankHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCookieBite,
  faHeart as filledHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useIngredientsList } from "../IngredientsList/state/useIngredientsList";
import { IIngredient } from "../../infrastructure/interfaces/Ingredient.interface";
import { IRecipeIngredient } from "../../infrastructure/interfaces/RecipeIngredient.interface";
import {
  getRecipeCost,
  HaveStockToPrepare,
} from "../../infrastructure/calculator/RecipeCalculator";
import { listUnitsByLanguage } from "../../infrastructure/units/Units";
import { LanguagesEnum } from "../../infrastructure/enums/LanguagesEnum";

const RecipeElement: FC<{
  recipe: IRecipe;
  ingredients: IIngredient[];
  onPrepare: (recipe: IRecipe) => void;
}> = ({
  recipe,
  ingredients,
  onPrepare,
}: {
  recipe: IRecipe;
  ingredients: IIngredient[];
  onPrepare: (recipe: IRecipe) => void;
}) => {
  const [favorite, setFavorite] = useState(false);
  const [enabledCookButton, setEnabledCookButton] = useState(true);
  const [showIngredients, setShowIngredients] = useState(false);
  const recipeCost = getRecipeCost(recipe.ingredients);

  const toggleShowIngredients = () => {
    setShowIngredients(!showIngredients);
  };

  useEffect(() => {
    const haveStock = HaveStockToPrepare(ingredients, recipe);
    if (!haveStock) setEnabledCookButton(false);
  }, [ingredients]);

  return (
    <div className="flex flex-col border-b pb-2 border-b-gray-200">
      <div className="flex flex-row justify-between flex-1">
        <div className="w-3/4" onClick={toggleShowIngredients}>
          <div className="">
            {recipe.name} ($ {recipeCost.toFixed(2)})
          </div>
        </div>
        <div className="w-1/4 flex flex-row justify-end pr-2 items-center">
          <button
            onClick={() => onPrepare(recipe)}
            disabled={!enabledCookButton}
            className="bg-pink-500 hover:bg-pink-400 disabled:bg-gray-500 text-white py-1 px-2 rounded-md mr-3 flex flex-row items-center"
          >
            <h3 className="pr-2 hidden md:inline">Preparar</h3>
            <FontAwesomeIcon icon={faCookieBite} beat size="xs" />
          </button>
          <button
            className="text-pink-500"
            onClick={() => setFavorite(!favorite)}
          >
            <FontAwesomeIcon icon={favorite ? filledHeart : blankHeart} />
          </button>
        </div>
      </div>
      <div className={`bg-gray-50 ${!showIngredients ? "hidden" : ""}`}>
        <RecipeIngredientHeader />
        {recipe.ingredients.map((ing) => (
          <RecipeIngredientElement
            key={ing.ingredient.id}
            recipeIngredient={ing}
            ingredients={ingredients}
          />
        ))}
      </div>
    </div>
  );
};

const RecipeIngredientHeader = () => {
  return (
    <div className="flex flex-row justify-between py-1 font-semibold text-xs">
      <h5 className="w-3/6 text-left pl-1">Ingrediente</h5>
      <h5 className="w-1/6 text-left">Necesario</h5>
      <h5 className="w-1/6 text-left">Inventario</h5>
    </div>
  );
};

const RecipeIngredientElement = ({
  recipeIngredient,
  ingredients,
}: {
  recipeIngredient: IRecipeIngredient;
  ingredients: IIngredient[];
}) => {
  const { ingredient } = recipeIngredient;
  const stock =
    ingredients.find((ing) => ing.id === ingredient.id)?.quantity ?? 0;
  const unitsByLanguage = listUnitsByLanguage(LanguagesEnum.spanish);
  const enoughInventory = stock >= recipeIngredient.amount;

  return (
    <div
      key={ingredient.id}
      className="flex flex-row justify-between py-1 font-semibold"
    >
      <h5 className="bg-gray-200 w-3/6 text-center pl-1">{ingredient.name}</h5>
      <h5 className="bg-gray-200 w-3/12 text-center text-xs pt-1">
        {recipeIngredient.amount} {unitsByLanguage[ingredient.unit]}
      </h5>
      <h5
        className={`w-1/6 text-center text-white ${
          enoughInventory ? "bg-green-500" : "bg-red-400"
        }`}
      >
        {stock}
      </h5>
    </div>
  );
};

export default RecipeElement;
