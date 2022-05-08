import { FC } from "react";
import IngredientsList from "../../components/IngredientsList/IngredientsList";
import NewIngredient from "../../components/NewIngredient/NewIngredient";

const Ingredients: FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-5">Ingredientes</h1>
      <NewIngredient />
      <IngredientsList />
    </div>
  );
};

export default Ingredients;
