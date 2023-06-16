import { FC } from "react";
import ThreeDots from "../common/ThreeDots/ThreeDots";

interface IIngredientElement {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  price: number;
  onClickChangeAmount: (
    id: number,
    value: number,
    currentQuantity: number
  ) => void;
  onClickOption: () => void;
}

const IngredientElement: FC<IIngredientElement> = ({
  id,
  name,
  quantity,
  unit,
  price,
  onClickChangeAmount,
  onClickOption,
}) => (
  <div className="flex flex-row justify-between items-center text-sm">
    <div className="w-2/6 text-black mr-1 mb-1 py-1 px-2 font-semibold">
      {name} {`(\$ ${price.toFixed(2)})`}
    </div>
    <div className="w-2/6 text-black mr-1 mb-1 py-1 px-2 font-semibold flex justify-center">
      <button
        onClick={() => onClickChangeAmount(id, -1, quantity)}
        className="w-6 h-6 text-white font-bold text-center bg-gray-400 active:bg-gray-300 transition-colors duration-200 rounded-xl"
      >
        -
      </button>
      <span className="w-10 text-center">{quantity}</span>
      <button
        onClick={() => onClickChangeAmount(id, 1, quantity)}
        className="w-6 h-6 text-white font-bold text-center bg-gray-400 active:bg-gray-300 transition-colors duration-200 rounded-xl"
      >
        +
      </button>
    </div>
    <div className="w-1/6 text-black mr-1 mb-1 py-1 px-2 font-semibold text-center">
      {unit}
    </div>
    <div
      onClick={onClickOption}
      className="w-1/6 text-black mr-1 mb-1 py-1 px-2 font-semibold"
    >
      <ThreeDots />
    </div>
  </div>
);

export default IngredientElement;
