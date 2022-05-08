import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Link to="/ingredientes">Agregar nuevo ingrediente</Link>
      <Link to="/">Actualizar inventario</Link>
      <Link to="/">Agregar receta</Link>
    </div>
  );
};

export default Home;
