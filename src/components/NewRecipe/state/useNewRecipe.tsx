import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { getRecipeCost } from "../../../infrastructure/calculator/RecipeCalculator";
import { LanguagesEnum } from "../../../infrastructure/enums/LanguagesEnum";
import { IIngredient } from "../../../infrastructure/interfaces/Ingredient.interface";
import { IRecipe } from "../../../infrastructure/interfaces/Recipe.interface";
import { IRecipeIngredient } from "../../../infrastructure/interfaces/RecipeIngredient.interface";
import { listUnitsByLanguage } from "../../../infrastructure/units/Units";
import {
  useIngriedientStore,
  useRecipeStore,
} from "../../../infrastructure/hooks/useStore";

export const useNewRecipe = () => {
  const navigate = useNavigate();
  const { loadRecipes, saveRecipe } = useRecipeStore();
  const { loadIngredients } = useIngriedientStore();
  const unitsByLanguage = listUnitsByLanguage(LanguagesEnum.spanish);

  const [name, setName] = useState<string>("");
  const [ingredient, setIngredient] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [ingredientsSelected, setIngredientsSelected] = useState<
    IRecipeIngredient[]
  >([]);
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [estimatedValue, setEstimatedValue] = useState(0);

  useEffect(() => {
    setIngredients(loadIngredients());
  }, []);

  useEffect(() => {
    setEstimatedValue(getRecipeCost(ingredientsSelected));
  }, [ingredientsSelected]);

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (
    e
  ) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "ingredient":
        setIngredient(value);
        break;
      case "amount":
        setAmount(parseFloat(value ?? 0));
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

  const addNewIngredientToRecipe = () => {
    const selectedIngredient = ingredients.find(
      (ing) => ing.name === ingredient
    );

    if (!selectedIngredient) {
      alert("El ingrediente seleccionado no existe.");
      return;
    }

    if (amount <= 0) {
      alert("La cantidad del ingrediente debe ser mayor a 0.");
      return;
    }

    setIngredientsSelected([
      ...ingredientsSelected,
      {
        amount,
        ingredient: selectedIngredient,
      },
    ]);

    setIngredient("");
    setAmount(0);
  };

  const removeIngredientFromRecipe = (ingredient: IRecipeIngredient) => {
    const index = ingredientsSelected.indexOf(ingredient);

    const newIngredientsSelected = [...ingredientsSelected];
    newIngredientsSelected.splice(index, 1);

    setIngredientsSelected(newIngredientsSelected);
  };

  const saveNewRecipe = (): boolean => {
    const recipes = loadRecipes();

    if (recipes.some((recipe) => recipe.name === name)) {
      alert(`Ya existe una receta guardada con el nombre de "${name}"`);
      return false;
    }

    if (ingredientsSelected.length === 0) {
      alert(`Debe ingresar al menos un ingrediente a la receta."`);
      return false;
    }

    let newRecipe: IRecipe = {
      id: new Date().getTime(),
      name,
      ingredients: ingredientsSelected,
    };

    saveRecipe(newRecipe);

    return true;
  };

  const showIngredientsSelected = () => {
    return ingredientsSelected.map((ingSelected) => (
      <div
        key={ingSelected.ingredient.id}
        className="flex flex-row justify-evenly text-white my-2"
      >
        <h3 className="p-1 w-3/6 bg-green-500">
          {ingSelected.ingredient.name}
        </h3>
        <h4 className="p-1 w-2/6 bg-green-600 text-sm text-center">
          {ingSelected.amount} {unitsByLanguage[ingSelected.ingredient.unit]}
        </h4>
        <div
          className="p-1 w-10 bg-red-500 rounded-md text-center"
          onClick={() => removeIngredientFromRecipe(ingSelected)}
        >
          x
        </div>
      </div>
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
      ingredient,
      amount,
      ingredients,
      estimatedValue,
    },
    functions: {
      addNewIngredientToRecipe,
      onChange,
      onSubmit,
      setIngredient,
      showIngredientsSelected,
    },
  };
};
