import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />} />
          <Route path="/home" element = {<Home />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/checkout" element = {<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
