import { FC } from "react";
import { Link } from "react-router-dom";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewRecipe from "../../components/NewRecipe/NewRecipe";

const NewRecipeContainer: FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-5">Nueva receta</h1>
      <div className="flex flex-row">
        <Link to="/recipes">
          <div className="p-2 text-green-500 rounded-md">
            <FontAwesomeIcon icon={faCircleArrowLeft} /> Regresar
          </div>
        </Link>
      </div>
      <NewRecipe />
    </div>
  );
};

export default NewRecipeContainer;
