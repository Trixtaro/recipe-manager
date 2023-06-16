import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IIngredient } from "../../../infrastructure/interfaces/Ingredient.interface";
import { Units } from "../../../infrastructure/units/Units";
import { useIngriedientStore } from "../../../infrastructure/hooks/useStore";

export const useNewIngredient = () => {
  const navigate = useNavigate();
  const { loadIngredients, saveIngredient } = useIngriedientStore();
  const [name, setName] = useState<string>("");
  const [unit, setUnit] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("0");
  const [price, setPrice] = useState<string>("1");

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (
    e
  ) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "unit":
        setUnit(value);
        break;
      case "quantity":
        setQuantity(value);
        break;
      case "price":
        setPrice(value);
        break;
      default:
    }
  };

  const verifyValues = (): boolean => {
    if (name === "") {
      alert("Se debe escribir un nombre para el ingrediente");
      return false;
    }

    if (unit === "") {
      alert("Debe seleccionar una medida para el ingrediente");
      return false;
    }

    return true;
  };

  const saveNewIngredient = (): boolean => {
    const ingredients = loadIngredients();

    if (ingredients.some((ingredient) => ingredient.name === name)) {
      alert(`Ya existe guardado con el nombre de "${name}"`);
      return false;
    }

    let newIngredient: IIngredient = {
      id: new Date().getTime(),
      name,
      quantity: parseFloat(quantity),
      unit,
      price: parseFloat(price),
    };

    saveIngredient(newIngredient);

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

    if (saveNewIngredient()) {
      navigate("/ingredients");
    }
  };

  return {
    values: {
      name,
      price,
      quantity,
      unit,
    },
    functions: {
      onChange,
      onSubmit,
      showUnitsOptions,
    },
  };
};
