import { FC } from "react";

const IngredientsHeader: FC = () => (
  <div className="flex flex-row justify-between border-b">
    <div className="w-1/3 text-blue-500 mr-1 mb-1 py-1 px-1 font-semibold">
      Nombre
    </div>
    <div className="w-2/6 text-blue-500 mr-1 mb-1 py-1 px-1 font-semibold text-center">
      Cantidad
    </div>
    <div className="w-1/3 text-blue-500 mr-1 mb-1 py-1 px-1 font-semibold text-center">
      Unidad
    </div>
    <div className="w-2/6 text-blue-500 mr-1 mb-1 py-1 px-1 font-semibold"></div>
  </div>
);

export default IngredientsHeader;
