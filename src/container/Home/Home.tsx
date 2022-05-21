import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Link to="/ingredients">Ingredientes</Link>
      <Link to="/recipes">Recetas</Link>
      <Link to="/recipes">Actualizar inventario</Link>
    </div>
  );
};

export default Home;
