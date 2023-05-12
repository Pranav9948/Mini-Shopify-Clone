import React, { useState } from "react";
import { Button, FormLayout, TextField } from "@shopify/polaris";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, showLoading } from "../../Redux/Actions/generalActions";
import Shimmer from "../general/Shimmer/Shimmer";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [storeName, setStoreName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.general);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("123", name, description, storeName, price, image);
    const newProduct = { name, description, storeName, price, image };
    try {
      dispatch(showLoading());

      await axios.post("/api/admin/products", newProduct);
      dispatch(HideLoading());
      toast.success("Product added successfully!");
      setName("");
      setDescription("");
      setStoreName("");
      setPrice("");
      setImage("");
    } catch (error) {
      console.log(error);
      alert("Error adding product.");
    }
  };

  const handleNameChange = (value) => setName(value);
  const handleDescriptionChange = (value) => setDescription(value);
  const handleStoreChange = (value) => setStoreName(value);
  const handlePriceChange = (value) => setPrice(value);
  const handleImageChange = (value) => setImage(value);

  return (
    loading ? <Shimmer/> :
    <div>
      <AdminNavbar />

      <div className="flex justify-center">
        <AdminSidebar />
        <div className="w-2/3 px-10 py-8 -mt-40">
          <h1 className="text-2xl font-bold mb-8">Add a New Product</h1>
          <form onSubmit={handleSubmit}>
            <FormLayout>
              <TextField
                label="Name"
                value={name}
                onChange={handleNameChange}
              />
              <TextField
                label="Description"
                value={description}
                onChange={handleDescriptionChange}
              />
              <TextField
                label="store"
                value={storeName}
                onChange={handleStoreChange}
              />
              <TextField
                label="Price"
                type="number"
                value={price}
                onChange={handlePriceChange}
              />
              <TextField
                label="Image URL"
                value={image}
                onChange={handleImageChange}
              />
              <Button submit>Add Product</Button>
            </FormLayout>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
