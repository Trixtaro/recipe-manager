import { FC } from "react";
import { useNewIngredient } from "./state/useNewIngredient";

const NewIngredient: FC = () => {
  const { functions, values } = useNewIngredient();

  return (
    <form onSubmit={functions.onSubmit} className="flex flex-col">
      <h2 className="font-bold mb-2 text-xl">
        Registrar datos de nuevo ingrediente
      </h2>
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
            Unidad de medida en la receta
          </label>
          <select
            name="unit"
            id="unit"
            value={values.unit}
            onChange={functions.onChange}
            className="bg-gray-200 rounded-lg mt-1 p-1 w-full"
          >
            <option value="">Selecciona una unidad...</option>
            {functions.showUnitsOptions()}
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
        <div className="my-2 flex flex-row justify-between gap-2">
          <div className="flex flex-col w-1/3">
            <label htmlFor="price" className="">
              Precio
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={values.price}
              onChange={functions.onChange}
              min="0.05"
              step="0.05"
              className="bg-gray-200 rounded-lg mt-1 p-1 w-full"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="buy_unit">Unidad al comprar</label>
            <select
              name="buy_unit"
              id="buy_unit"
              value={values.buyUnit}
              onChange={functions.onChange}
              className="bg-gray-200 rounded-lg mt-1 p-1 w-full"
            >
              <option value="">Seleccionar...</option>
              {functions.showBuyUnitsOptions()}
            </select>
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="buy_quantity">Cantidad al comprar</label>
            <input
              type="number"
              id="buy_quantity"
              name="buy_quantity"
              value={values.buyQuantity}
              onChange={functions.onChange}
              min="1"
              step="1"
              className="bg-gray-200 rounded-lg mt-1 p-1 w-full"
            />
          </div>
        </div>
      </fieldset>
      <button className="p-2 bg-green-500 text-white rounded-lg font-semibold self-center my-2">
        Guardar ingrediente
      </button>
    </form>
  );
};

export default NewIngredient;
