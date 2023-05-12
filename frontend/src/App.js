import React from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AdminHomePage from "./components/Admin/AdminHomePage";
import HomePage from "./components/Users/HomePage";
import ViewStore from "./components/Users/ViewStore";
import AddProduct from "./components/Admin/AddProduct";
import AddStore from "./components/Admin/AddStore";
import ViewProducts from "./components/Users/ViewProducts";
import InstalledStores from "./components/Users/InstalledStores";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/add-store" element={<AddStore/>} />
        <Route path="/view-store-products/:id" element={<ViewProducts/>} />
        <Route path={`/stores/installed`} element={<InstalledStores/>} />

        <Route path="/view-stores" element={<ViewStore/>} />
      </Routes>
    </div>
  );
}

export default App;
