import { Fragment, FC } from "react";
import IngredientsHeader from "./IngredientsHeader";
import { useIngredientsList } from "./state/useIngredientsList";

const IngredientsList: FC = () => {
  const { functions } = useIngredientsList();

  return (
    <div>
      <h2 className="font-bold mb-2 text-xl">Lista de ingredientes</h2>
      <IngredientsHeader />
      <Fragment>{functions.showIngredients()}</Fragment>
    </div>
  );
};

export default IngredientsList;
