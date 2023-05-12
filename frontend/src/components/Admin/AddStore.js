import React, { useState } from 'react';
import { Form, FormLayout, TextField, Button } from '@shopify/polaris';
import { toast } from 'react-hot-toast';
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'
import axios from 'axios';
import Shimmer from '../general/Shimmer/Shimmer';
import { useDispatch,useSelector } from "react-redux"
import { HideLoading, showLoading } from "../../Redux/Actions/generalActions";


const AddStore = () => {

    const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const dispatch=useDispatch()
const {loading}=useSelector((state)=>state.general)



    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(name,description,image);
        try {
            dispatch(showLoading())

          const response = await axios.post('/api/admin/store', {
            name,
            description,
            image
          });

          dispatch(HideLoading())
          console.log(response.data);
          toast.success('Category added successfully!');
          setName('');
          setDescription('');
          setImage('');
        } catch (error) {
          console.error(error);
          alert('Error adding category.');
        }
      };
      





  return (

    loading ? <Shimmer/> :
    <div>
        <AdminNavbar/>
        
        <div className="flex justify-center">
        <AdminSidebar />
        <div className="w-2/3 px-10 py-8 -mt-40">
          <h1 className="text-2xl font-bold mb-8 text-center">Add a New Store</h1>

          <Form onSubmit={handleSubmit}>
        <FormLayout>
          <TextField
            value={name}
            onChange={setName}
            label="Name"
            type="text"
            required
          />
          <TextField
            value={description}
            onChange={setDescription}
            label="Description"
            type="text"
            multiline
            required
          />
          <TextField
            value={image}
            onChange={setImage}
            label="Image URL"
            type="url"
            required
          />
          <Button submit>Add Store</Button>
        </FormLayout>
      </Form>

        </div>
      </div>


    </div>
  )
}

export default AddStore







