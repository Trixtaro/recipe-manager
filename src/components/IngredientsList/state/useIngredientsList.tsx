import { useEffect, useState } from "react";
import { LanguagesEnum } from "../../../infrastructure/enums/LanguagesEnum";
import { IIngredient } from "../../../infrastructure/interfaces/Ingredient.interface";
import { listUnitsByLanguage } from "../../../infrastructure/units/Units";
import IngredientElement from "../IngredientElement";

export const useIngredientsList = () => {
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  const loadIngredients = () => {
    setIngredients(JSON.parse(localStorage.getItem("ingredients") || "[]"));
  };

  const storeIngredients = () => {
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
    loadIngredients();
  };

  const updateIngredientAmount = (id: number, amount: number) => {
    let index = 1;

    const currentIngredient = ingredients.find((ing, i) => {
      index = i;
      return ing.id === id;
    });

    if (!currentIngredient) {
      alert("No se encontro el ingrediente");
      return;
    }

    if (currentIngredient.quantity + amount < 0) {
      return;
    }

    ingredients[index].quantity += amount;

    storeIngredients();
  };

  const showIngredients = () => {
    if (ingredients.length === 0) {
      return (
        <div className="text-center">No hay ingredientes registrados.</div>
      );
    }

    const listOfUnits = listUnitsByLanguage(LanguagesEnum.spanish);

    return ingredients.map((ingredient) => (
      <IngredientElement
        key={ingredient.id}
        id={ingredient.id as number}
        name={ingredient.name}
        quantity={ingredient.quantity}
        unit={listOfUnits[ingredient.unit]}
        price={ingredient.price}
        onClickChangeAmount={updateIngredientAmount}
      />
    ));
  };

  useEffect(() => {
    loadIngredients();
  }, []);

  return {
    functions: {
      showIngredients,
    },
  };
};
