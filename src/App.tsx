import { BrowserRouter, Route, Routes } from "react-router-dom";
import Default from "./container/Default/Default";
import Home from "./container/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/default" element={<Default />} />
        <Route path="*" element={<div>404 NOT FOUND</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
