import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AlphaCard, Box, Layout, Text } from "@shopify/polaris";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux"
import { HideLoading, showLoading } from "../../Redux/Actions/generalActions";
import Shimmer from "../general/Shimmer/Shimmer";


const ViewProducts = () => {
  const { id } = useParams();
  const [productz, setProductz] = useState([]);

  const [isInstalling, setIsInstalling] = useState(false);
  const navigate = useNavigate();

  
  const dispatch=useDispatch()
const {loading}=useSelector((state)=>state.general)

  useEffect(() => {
    getStoreProducts();
  }, []);

 



  const getStoreProducts = async (req, res) => {
    try {
        dispatch(showLoading())
      const { data } = await axios.get(`/api/users/products/${id}`);
      console.log("123", data);
      dispatch(HideLoading())
      setProductz(data);
    } catch (err) {
      console.log("333", err);
    }
  };

  return (

    loading ? <Shimmer/> :

    <div>
      <Navbar />

      <div className="flex justify-center">
        <Sidebar />
        <div className="w-2/3 px-10 py-8 -mt-40">
          <h1 className="text-2xl font-bold mb-8 text-center">
            View Store Product
          </h1>

          <Layout>
            <Layout.Section>
              <div className="flex flex-wrap -mx-2">
                {productz.map((store) => (
                  <div
                    className="w-1/2 px-2 mt-10"
                    style={{ height: "500px" }}
                    key={store._id}
                  >
                    <Box width={200}>
                      <AlphaCard className="alpha-card">
                        <img
                          src={store.image}
                          alt={store.name}
                          style={{ width: "300px", height: "200px" }}
                        />
                        <div className="text">
                          <h3 className="text-xl font-bold text-center pt-4 pb-4">
                            {store.name}
                          </h3>
                          <p className="text-center pt-4 pb-4">
                            {store.description}
                          </p>
                        </div>
                        <div className="flex justify-center">
                       

                         <Link to={'/view-stores'}>
                          <button
                            className="bg-red-300 p-2 mt-4 mb-4 me-10 text-white"
                          
                          >
                            Go Back 
                          </button>
                          </Link>
                        </div>
                      </AlphaCard>
                    </Box>
                  </div>
                ))}
              </div>
            </Layout.Section>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
