import { LanguagesEnum } from "../../../infrastructure/enums/LanguagesEnum";
import { IIngredient } from "../../../infrastructure/interfaces/Ingredient.interface";
import { listUnitsByLanguage } from "../../../infrastructure/units/Units";
import IngredientElement from "../IngredientElement";

export const useIngredientsList = () => {
  const showIngredients = () => {
    const ingredients: IIngredient[] = JSON.parse(
      localStorage.getItem("ingredients") || "[]"
    );

    if (ingredients.length === 0) {
      return (
        <div className="text-center">No hay ingredientes registrados.</div>
      );
    }

    const listOfUnits = listUnitsByLanguage(LanguagesEnum.spanish);

    return ingredients.map((ingredient) => (
      <IngredientElement
        key={ingredient.id}
        name={ingredient.name}
        quantity={ingredient.quantity}
        unit={listOfUnits[ingredient.unit]}
      />
    ));
  };
  return {
    functions: {
      showIngredients,
    },
  };
};
