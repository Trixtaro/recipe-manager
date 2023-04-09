import { FC } from "react";

const RecipesHeader: FC = () => (
  <div className="flex flex-row justify-between border-b text-sm">
    <div className="w-2/6 text-blue-500 mr-1 mb-1 py-1 px-1 font-semibold">
      Nombre
    </div>
    <div className="w-1/6 text-blue-500 mr-1 mb-1 py-1 px-1 font-semibold text-center">
      Precio
    </div>
    <div className="w-3/6 text-blue-500 mr-1 mb-1 py-1 px-1 font-semibold text-center">
      Opciones
    </div>
  </div>
);

export default RecipesHeader;
