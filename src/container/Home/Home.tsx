import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <img src="/images/logo.jpeg" alt="" className="w-40 mb-10" />
      <div className="flex flex-col">
        <Link className="bg-pink-600 text-white w-40 my-4 p-2 rounded-md text-xl text-center" to="/ingredients">Ingredientes</Link>
        <Link className="bg-pink-600 text-white w-40 my-4 p-2 rounded-md text-xl text-center" to="/recipes">Recetas</Link>
      </div>
      <div>
        <a href="https://github.com/Trixtaro" rel="noopener noreferrer" target="blank">
          <h4 className="font-semibold text-pink-400 mt-5">Desarrollado por @Trixtaro</h4>
        </a>
      </div>
    </div>
  );
};

export default Home;
