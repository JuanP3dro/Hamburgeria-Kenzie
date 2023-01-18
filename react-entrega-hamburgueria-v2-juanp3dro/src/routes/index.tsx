import { Routes, Route } from "react-router-dom";
import ProductsProvider from "../contexts/ProductsContext";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";

export function RoutesBurger() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={
      <ProductsProvider>
        <Dashboard/>
      </ProductsProvider>  } />
    </Routes>
  );
}

export default RoutesBurger;
