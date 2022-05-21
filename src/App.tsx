import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Default from "./container/Default/Default";
import Home from "./container/Home/Home";
import Ingredients from "./container/Ingredients/Ingredients";
import NewIngredientContainer from "./container/NewIngredientContainer/NewIngredientContainer";
import NewRecipeContainer from "./container/NewRecipeContainer/NewRecipeContainer";
import Recipes from "./container/Recipes/Recipes";

function App() {
  useEffect(() => {
    initializeStorage();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/ingredients/new" element={<NewIngredientContainer />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/new" element={<NewRecipeContainer />} />
        <Route path="/default" element={<Default />} />
        <Route path="*" element={<div>404 NOT FOUND</div>} />
      </Routes>
    </BrowserRouter>
  );
}

const initializeStorage = () => {
  if (localStorage.getItem("ingredients") === null) {
    localStorage.setItem("ingredients", JSON.stringify([]));
  }
};

export default App;
