'use client'

import { getProduct } from "@services/controllerService";
import { useState } from "react";
import Button from '@mui/material/Button';
import { Field, Form } from "react-final-form";

const Page = () => {
  const [product, setProduct] = useState();
  const onSubmit = (value) => {
    console.log('fired');
    const getProductRes = async () => {
      const productResult = await getProduct("https://localhost:7174/product", value.id);
      setProduct(await productResult);
      console.log(productResult);
    };
    getProductRes();
  };

  return (
    <>
      <h1>Product</h1>
      <Form
      onSubmit={onSubmit}
      render={({handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label name='Id'>Id</label>
            <Field name='id' component='input' type='text' placeholder='Id'/>
          </div>
          <Button variant='contained' type="submit">Get product</Button>
        </form>
      )}
      />
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
