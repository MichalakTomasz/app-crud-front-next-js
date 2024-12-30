'use client'

import { addProduct } from "@services/controllerService";
import { useFormik } from 'formik';
import { Button, TextField, Box } from "@mui/material";
import { baseUrl } from "@services/commonConsts";
import { useState } from "react";
import '../../styles/globals.css';

const Page = () => {
  const [addProductResult, setAddProductResult] = useState(undefined);
    const doAddProduct = async (values) => {
      const addProductRes = await addProduct(
        baseUrl + '/product',
        {
          name: values.name,
          code: values.code,
          description: values.description,
          urlPicture: values.urlPicture,
          price: values.price,
        });
        const result = addProductRes?.id > 0;
        setAddProductResult(result);
    };

  const formik = useFormik({
    initialValues: {
      name: '',
      code: '',
      description: '',
      urlPisture: '',
      price: 0
    },
    onSubmit: (values) => {
      doAddProduct(values);
    }
  });

  return (
    <>
      <h1>Add product</h1>
      <Box 
      component='form' 
      sx={{ '& .MuiTextField-root': { m: 1,  width: '50ch'}, width:400}}
      onSubmit={formik.handleSubmit}>
              <TextField 
                label='name'
                name='name'
                type="text"
                onChange={formik.handleChange}
              />
              <TextField 
                label='code'
                name="code"
                type="text"
                onChange={formik.handleChange}
              />
              <TextField
                label='Description'
                name="description"
                type="text"
                onChange={formik.handleChange}
              />
              <TextField
                label='Url Picture'
                name="urlPicture"
                type="text"
                onChange={formik.handleChange}
              />
              <TextField
                label='Price'
                name="price"
                type="text"
                onChange={formik.handleChange}
              />
            <Button variant="contained" type="submit">Save</Button>
          </Box>
          
          <div hidden={addProductResult == undefined || addProductResult == false}>Product added successfull</div>
          <div hidden={addProductResult == undefined || addProductResult == true}>Add product error</div>
    </>
  );
};

export default Page;
