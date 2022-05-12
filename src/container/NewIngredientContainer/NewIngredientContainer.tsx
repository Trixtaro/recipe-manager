import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Link } from "react-router-dom";
import NewIngredient from "../../components/NewIngredient/NewIngredient";

const NewIngredientContainer: FC<{}> = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-5">Nuevo ingrediente</h1>
      <div className="flex flex-row">
        <Link to="/ingredients">
          <div className="p-2 text-green-500 rounded-md">
            <FontAwesomeIcon icon={faCircleArrowLeft} /> Regresar
          </div>
        </Link>
      </div>
      <NewIngredient />;
    </div>
  );
};

export default NewIngredientContainer;
