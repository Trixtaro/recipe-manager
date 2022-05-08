import { FC } from "react";
import { useNewIngredient } from "./state/useNewIngredient";

const NewIngredient: FC = () => {
  const { functions, values } = useNewIngredient();

  return (
    <form onSubmit={functions.onSubmit} className="flex flex-col">
      <h2 className="font-bold mb-2 text-xl">Nuevo ingrediente</h2>
      <fieldset className="flex flex-col">
        <div className="my-2">
          <label htmlFor="name" className="">
            Nombre del ingrediente
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
        <div className="my-2 flex flex-col">
          <label htmlFor="name" className="">
            Unidad de medida
          </label>
          <select
            name="unit"
            id="unit"
            value={values.unit}
            onChange={functions.onChange}
            className="bg-gray-200 rounded-lg mt-1 p-1 w-full"
          >
            <option value="">Selecciona una unidad...</option>
            <option value="units">Unidades</option>
            <option value="gram">Gramos - Peso</option>
            <option value="ounce">Onzas - Peso</option>
            <option value="liter">Litro - Volumen</option>
            <option value="pund">Libra - Peso</option>
            <option value="mililiter">Mililitro - Volumen</option>
          </select>
        </div>
        <div className="my-2">
          <label htmlFor="name" className="">
            Cantidad inicial
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={values.quantity}
            onChange={functions.onChange}
            min="0"
            className="bg-gray-200 rounded-lg mt-1 p-1 w-full"
          />
        </div>
      </fieldset>
      <button className="p-2 bg-green-500 text-white rounded-lg font-semibold self-center my-2">
        Guardar ingrediente
      </button>
    </form>
  );
};

export default NewIngredient;
