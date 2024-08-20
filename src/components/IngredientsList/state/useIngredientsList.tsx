import { ChangeEventHandler, useEffect, useState } from "react";
import { LanguagesEnum } from "../../../infrastructure/enums/LanguagesEnum";
import { IIngredient } from "../../../infrastructure/interfaces/Ingredient.interface";
import { listUnitsByLanguage } from "../../../infrastructure/units/Units";
import IngredientElement from "../IngredientElement";
import { useIngriedientStore } from "../../../infrastructure/hooks/useStore";

export const useIngredientsList = () => {
  const {
    loadIngredients,
    updateAmountOfIngredient,
    updateIngredientPrice,
    deleteIngredient,
  } = useIngriedientStore();
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [selectedIngredient, setSelectedIngredient] =
    useState<IIngredient | null>(null);

  const [openModal, setOpenModal] = useState(false);
  const [modalPrice, setModalPrice] = useState(0);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const handleUpdateIngredientAmount = (
    id: number,
    amount: number,
    currentQuantity: number
  ) => {
    if (currentQuantity + amount < 0) {
      return;
    }

    if (!updateAmountOfIngredient(id, amount)) {
      alert("No se encontro el ingrediente");
      return;
    }

    setIngredients(loadIngredients());
  };

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "price":
        setModalPrice(parseFloat(value));
        break;
      default:
    }
  };

  const handleUpdatePrice = () => {
    updateIngredientPrice(selectedIngredient!.id!, modalPrice);

    setIngredients(loadIngredients());

    setOpenModal(false);
  };

  const handleDeleteIngredient = () => {
    deleteIngredient(selectedIngredient!.id!);
    setOpenModalDelete(false);
    setIngredients(loadIngredients());
  };

  const showIngredients = () => {
    if (ingredients.length === 0) {
      return (
        <div className="text-center">No hay ingredientes registrados.</div>
      );
    }

    const listOfUnits = listUnitsByLanguage(LanguagesEnum.spanish);

    return ingredients.map((ingredient) => (
      <IngredientElement
        key={ingredient.id}
        id={ingredient.id as number}
        name={ingredient.name}
        quantity={ingredient.quantity}
        unit={listOfUnits[ingredient.unit]}
        price={ingredient.price}
        onClickChangeAmount={handleUpdateIngredientAmount}
        onClickOption={() => {
          setSelectedIngredient(ingredient);
          setModalPrice(ingredient.price);
          setOpenModal(true);
        }}
        onClickDelete={() => {
          setSelectedIngredient(ingredient);
          setOpenModalDelete(true);
        }}
      />
    ));
  };

  useEffect(() => {
    setIngredients(loadIngredients());
  }, []);

  return {
    functions: {
      showIngredients,
      setOpenModal,
      setOpenModalDelete,
    },
    values: {
      openModal,
      openModalDelete,
      modalPrice,
      ingredients,
      selectedIngredient,
    },
    handlers: {
      handleUpdatePrice,
      handleDeleteIngredient,
      handleChange,
    },
  };
};
