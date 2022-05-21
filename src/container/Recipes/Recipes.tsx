import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Link } from "react-router-dom";

const Recipes: FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-5">Recetas</h1>
      <div className="flex flex-row">
        <Link to="/">
          <div className="p-2 text-green-500 rounded-md">
            <FontAwesomeIcon icon={faCircleArrowLeft} /> Regresar
          </div>
        </Link>
      </div>
      <div className="flex flex-row-reverse">
        <Link to="/recipes/new">
          <div className="p-2 bg-green-500 text-white rounded-md">
            Nueva receta
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Recipes;
