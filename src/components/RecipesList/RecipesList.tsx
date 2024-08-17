import { FC, Fragment } from "react";
import RecipesHeader from "./RecipesHeader";
import { useRecipesList } from "./state/useRecipeList";
import Modal from "../common/Modal/Modal";

const RecipesList: FC = () => {
  const { functions, values } = useRecipesList();

  return (
    <div>
      <h2 className="font-bold mb-2 text-xl">Lista de recetas</h2>
      <RecipesHeader />
      <Fragment>{functions.showRecipes()}</Fragment>
      <Modal
        isOpen={values.openModal}
        onClose={() => functions.setOpenModal(false)}
      >
        <div className="py-3 px-2 flex flex-col">
          <h2 className="font-bold text-center">Receta preparada</h2>
          <p className="mb-2">
            Se han consumido los ingredientes de la receta.
          </p>
          <div className="flex flex-row justify-center">
            <button
              className="p-2 bg-pink-500 rounded-lg text-white"
              onClick={() => functions.setOpenModal(false)}
            >
              Aceptar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RecipesList;
