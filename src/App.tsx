import { BrowserRouter, Route } from "react-router-dom";
import DefaultPage from "./container/Default/Default";

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <DefaultPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
