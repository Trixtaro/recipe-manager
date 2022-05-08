import { FC } from "react";
import ThreeDots from "../common/ThreeDots/ThreeDots";

const IngredientElement: FC<{
  name: string;
  quantity: number;
  unit: string;
}> = ({
  name,
  quantity,
  unit,
}: {
  name: string;
  quantity: number;
  unit: string;
}) => (
  <div className="flex flex-row justify-between items-center">
    <div className="w-1/3 text-black mr-1 mb-1 py-1 px-2 font-semibold">
      {name}
    </div>
    <div className="w-2/6 text-black mr-1 mb-1 py-1 px-2 font-semibold">
      {quantity}
    </div>
    <div className="w-1/3 text-black mr-1 mb-1 py-1 px-2 font-semibold text-center">
      {unit}
    </div>
    <div className="w-2/6 text-black mr-1 mb-1 py-1 px-2 font-semibold">
      <ThreeDots />
    </div>
  </div>
);

export default IngredientElement;
