import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Signin from "./Components/Signin";
import Navigation from "./Components/Navigation";
import ProductDescription from "./Components/ProductDescription";
import { useState } from "react";
export default function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation user={user} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDescription />} />
          <Route
            path="/signin"
            element={<Signin user={user} setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
