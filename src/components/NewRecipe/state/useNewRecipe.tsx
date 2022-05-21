import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRecipe } from "../../../infrastructure/interfaces/Recipe.interface";
import { Units } from "../../../infrastructure/units/Units";

export const useNewRecipe = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (
    e
  ) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      default:
    }
  };

  const verifyValues = (): boolean => {
    if (name === "") {
      alert("Se debe escribir un nombre para la receta");
      return false;
    }

    return true;
  };

  const saveNewRecipe = (): boolean => {
    const recipes: IRecipe[] =
      JSON.parse(localStorage.getItem("recipes") as string) || [];

    if (recipes.some((recipe) => recipe.name === name)) {
      alert(`Ya existe una receta guardada con el nombre de "${name}"`);
      return false;
    }

    let newRecipe: IRecipe = {
      id: new Date().getTime(),
      name,
    };

    recipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));

    return true;
  };

  const showUnitsOptions = () => {
    return Units.map((unit) => (
      <option key={unit.name} value={unit.name}>
        {unit.spanish.listName}
      </option>
    ));
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (verifyValues() === false) return;

    if (saveNewRecipe()) {
      navigate("/recipes");
    }
  };

  return {
    values: {
      name,
    },
    functions: {
      onChange,
      onSubmit,
      showUnitsOptions,
    },
  };
};
