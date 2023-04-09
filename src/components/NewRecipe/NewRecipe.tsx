import { FC } from "react";
import SearchTextField from "../common/SearchTextField/SearchTextfield";
import { useNewRecipe } from "./state/useNewRecipe";

const NewRecipe: FC = () => {
  const { functions, values } = useNewRecipe();

  return (
    <form onSubmit={functions.onSubmit} className="flex flex-col">
      <h2 className="font-bold mb-2 text-xl">
        Registrar datos de nueva receta
      </h2>
      <fieldset className="flex flex-col my-2">
        <label htmlFor="name" className="">
          Nombre de la receta
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={functions.onChange}
          className="bg-gray-200 rounded-lg mt-1 p-1 w-full"
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <div className="my-2">
          <label htmlFor="ingredient" className="">
            Agregar producto
          </label>
          {functions.showIngredientsSelected()}
          <div className="flex flex-row flex-wrap justify-between items-center">
            <SearchTextField
              items={values.ingredients.map((ing) => ing.name)}
              name={"ingredient"}
              onChange={functions.onChange}
              onClickItem={(item) => functions.setIngredient(item)}
              value={values.ingredient}
              placeholder="Nombre del ingrediente..."
              className="bg-gray-200 rounded-lg mt-1 p-1 w-full"
              inputStyles={{ width: "13rem" }}
              itemStyles={{
                border: "grey solid 1px",
                marginLeft: "5px",
                padding: "3px",
                color: "black",
                backgroundColor: "white",
              }}
            />
            <input
              type="number"
              id="amount"
              name="amount"
              value={values.amount.toString()}
              step="0.1"
              placeholder="Cant."
              onChange={functions.onChange}
              className="bg-gray-200 rounded-lg mt-1 p-1 w-12 text-center"
            />
            <div
              onClick={functions.addNewIngredientToRecipe}
              className="w-6 h-6 text-white font-bold text-center bg-green-400 active:bg-green-300 transition-colors duration-200 rounded-xl"
            >
              +
            </div>
          </div>
        </div>
      </fieldset>
      <div className="my-2">
        <h3>Precio estimado</h3>
        <h4>$ {values.estimatedValue.toFixed(2)}</h4>
      </div>
      <button className="p-2 bg-green-500 text-white rounded-lg font-semibold self-center my-2">
        Guardar receta
      </button>
    </form>
  );
};

export default NewRecipe;
