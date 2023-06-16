import { IIngredient } from "../interfaces/Ingredient.interface";
import { IRecipe } from "../interfaces/Recipe.interface";

export const useIngriedientStore = () => {
  const loadIngredients = (): IIngredient[] => {
    return JSON.parse(localStorage.getItem("ingredients") || "[]");
  };

  const saveIngredient = (newIngriedent: IIngredient) => {
    const ingredients = loadIngredients();
    ingredients.push(newIngriedent);

    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  };

  const updateAmountOfIngredient = (id: number, amount: number): boolean => {
    let index = 1;

    const ingredients = loadIngredients();

    const currentIngredient = ingredients.find((ing, i) => {
      index = i;
      return ing.id === id;
    });

    if (!currentIngredient) {
      return false;
    }

    ingredients[index].quantity += amount;

    localStorage.setItem("ingredients", JSON.stringify(ingredients));

    return true;
  };

  const updateIngredientPrice = (ingredientId: number, newPrice: number) => {
    let index = 1;

    const ingredients = loadIngredients();

    const currentIngredient = ingredients.find((ing, i) => {
      index = i;
      return ing.id === ingredientId;
    });

    if (!currentIngredient) {
      return false;
    }

    ingredients[index].price = newPrice;

    const recipes = JSON.parse(
      localStorage.getItem("recipes") || "[]"
    ) as IRecipe[];

    const updatedRecipes = recipes.map((recp) => {
      return {
        ...recp,
        ingredients: recp.ingredients.map((ing) =>
          ing.ingredient.id === ingredientId
            ? {
                ...ing,
                ingredient: {
                  ...ing.ingredient,
                  price: newPrice,
                },
              }
            : ing
        ),
      };
    });

    localStorage.setItem("ingredients", JSON.stringify(ingredients));
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    return true;
  };

  const consumeIngredientsFromRecipe = (recipe: IRecipe) => {
    const ingredients = loadIngredients();

    const ingredientsUpdated: IIngredient[] = ingredients.map(
      (ing): IIngredient => {
        console.log(recipe.ingredients);
        const recipeAmount = recipe.ingredients.find(
          (rcpIng) => rcpIng.ingredient.id === ing.id
        )?.amount;

        if (!recipeAmount) return ing;

        return {
          ...ing,
          quantity: ing.quantity - recipeAmount,
        };
      }
    );

    localStorage.setItem("ingredients", JSON.stringify(ingredientsUpdated));
  };

  return {
    loadIngredients,
    saveIngredient,
    updateAmountOfIngredient,
    updateIngredientPrice,
    consumeIngredientsFromRecipe,
  };
};

export const useRecipeStore = () => {
  const loadRecipes = (): IRecipe[] => {
    return JSON.parse(localStorage.getItem("recipes") || "[]");
  };

  const saveRecipe = (newRecipe: IRecipe) => {
    const recipes = loadRecipes();
    recipes.push(newRecipe);

    localStorage.setItem("recipes", JSON.stringify(recipes));
  };

  return {
    loadRecipes,
    saveRecipe,
  };
};
