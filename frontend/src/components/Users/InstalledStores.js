
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { AlphaCard, Box, Layout, Text } from "@shopify/polaris";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { HideLoading, showLoading } from "../../Redux/Actions/generalActions";
import Shimmer from "../general/Shimmer/Shimmer";


const InstalledStores = () => {

    const [installedStores, setInstalledStores] = useState([]);

    useEffect(()=>{

         getInstalledStores()
    },[])

    const {loading}=useSelector((state)=>state.general)

   
const dispatch=useDispatch()
  

    const getInstalledStores = async () => {
      try {
        console.log("11111");
        dispatch(showLoading())
        const { data } = await axios.get("/api/users/stores/installed");
        console.log("444", data);
        setInstalledStores(data);
        dispatch(HideLoading())
      } catch (error) {
        console.error(error);
        alert("Error fetching stores.", error);
      }
    };




  return (


    
        loading ? <Shimmer/> :
    
    <div>
      <Navbar />

      <div className="flex justify-center">
        <Sidebar />
        <div className="w-2/3 px-10 py-8 mt-2">
          <h1 className="text-2xl font-bold mb-8 text-center">View Installed  Stores</h1>

          <Layout>
            <Layout.Section>
              <div className="flex flex-wrap -mx-2">
                {installedStores.map((store) => (
                  <div className="w-1/2 px-2 mt-10" key={store._id}>
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
                         
                          <Link to={`/view-store-products/${store._id}`}>
                            <button className="bg-yellow-200 p-2 mt-4 mb-4 ms-4">View Store Products</button>
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
  )
}

export default InstalledStores