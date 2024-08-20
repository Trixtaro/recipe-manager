import { Fragment, FC, ChangeEvent } from "react";
import IngredientsHeader from "./IngredientsHeader";
import { useIngredientsList } from "./state/useIngredientsList";
import Modal from "../common/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faPlusCircle,
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

const IngredientsList: FC = () => {
  const { functions, values, handlers } = useIngredientsList();

  return (
    <div>
      <h2 className="font-bold mb-2 text-xl">Lista de ingredientes</h2>
      <IngredientsHeader />
      <Fragment>{functions.showIngredients()}</Fragment>
      <Modal
        isOpen={values.openModal}
        onClose={() => functions.setOpenModal(false)}
      >
        <div className="py-3 px-2 flex flex-col">
          <h2 className="font-bold text-center">Actualizar precio</h2>
          <p>Ingrese el nuevo precio del ingrediente:</p>
          <div className="flex flex-row justify-center items-center">
            <div
              onClick={() =>
                handlers.handleChange({
                  target: {
                    name: "price",
                    value: (values.modalPrice - 0.05).toFixed(2),
                  },
                } as ChangeEvent<HTMLInputElement>)
              }
              className="text-xl text-green-500 mr-2"
            >
              <FontAwesomeIcon icon={faSquareMinus} />
            </div>
            <input
              name="price"
              type="number"
              step={0.05}
              value={values.modalPrice}
              onChange={handlers.handleChange}
              className="border rounded-sm border-black my-2 w-1/2 p-1 self-center text-right"
            />
            <div
              onClick={() =>
                handlers.handleChange({
                  target: {
                    name: "price",
                    value: (values.modalPrice + 0.05).toFixed(2),
                  },
                } as ChangeEvent<HTMLInputElement>)
              }
              className="text-xl text-green-500 ml-2"
            >
              <FontAwesomeIcon icon={faSquarePlus} />
            </div>
          </div>
          <button
            onClick={handlers.handleUpdatePrice}
            className="bg-green-500 hover:bg-green-400 text-white w-/12 self-center p-2 rounded-md font-bold"
          >
            Actualizar
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={values.openModalDelete}
        onClose={() => functions.setOpenModalDelete(false)}
      >
        <div className="py-3 px-2 flex flex-col">
          <h2 className="font-bold text-center">Eliminar ingrediente</h2>
          <p>¿Está seguro que desea eliminar el ingrediente?</p>
          <p>Tambien se borraran las recetas relacionadas.</p>
          <div className="flex flex-row justify-center items-center">
            <button
              onClick={handlers.handleDeleteIngredient}
              className="bg-red-500 hover:bg-red-400 text-white w-/12 self-center p-2 rounded-md font-bold"
            >
              Eliminar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default IngredientsList;
