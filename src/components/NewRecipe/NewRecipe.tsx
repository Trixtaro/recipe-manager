import { FC } from "react";
import { useNewRecipe } from "./state/useNewRecipe";

const NewRecipe: FC = () => {
  const { functions, values } = useNewRecipe();

  return (
    <form onSubmit={functions.onSubmit} className="flex flex-col">
      <h2 className="font-bold mb-2 text-xl">
        Registrar datos de nueva receta
      </h2>
      <fieldset className="flex flex-col">
        <div className="my-2">
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
        </div>
      </fieldset>
      <button className="p-2 bg-green-500 text-white rounded-lg font-semibold self-center my-2">
        Guardar receta
      </button>
    </form>
  );
};

export default NewRecipe;
