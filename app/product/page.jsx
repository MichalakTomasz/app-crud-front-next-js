'use client'

import { getProduct } from "@services/controllerService";
import { useState } from "react";
import { baseUrl } from "@services/commonConsts";
import { TextField, Button, Box } from "@node_modules/@mui/material";
import { useFormik } from "formik";

const Page = () => {
  const [product, setProduct] = useState();
  
  const formik = useFormik({
    initialValues:{
      id: 0
    },
    onSubmit: (value) => {
      const getProductRes = async () => {
        const productResult = await getProduct(baseUrl + '/product', value.id);
        setProduct(productResult);
      };
      getProductRes();
    }
  });

  return (
    <>
      <h1>Product</h1>
      
        <Box 
          component = 'form'
          sx={{'& .MuiTextField-root': {m: 1, width: '30ch'}, msFlexDirection: 'column'}}
          onSubmit={formik.handleSubmit}>
            <TextField 
            label='Id'
            name='id'
            type="text"
            onChange={formik.handleChange}
            />
          <Button variant='contained' type="submit">Get product</Button>
        </Box>
      <>
        {product ? (
          <>
            <div>Name: {product.name}</div>
            <div>Code: {product.code}</div>
            <div>Description: {product.description}</div>
            <div>Url Price: {product.urlPicture}</div>
            <div>Price: {product.price}</div>
          </>
        ) : null}
      </>
    </>
  );
};

export default Page;
