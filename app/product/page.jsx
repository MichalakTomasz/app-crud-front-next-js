'use client'

import { getProduct } from "@services/controllerService";
import { useState } from "react";

const Page = () => {
  const [product, setProduct] = useState();
  const [id, setId] = useState('');
  const onGetProduct = () => {
    const getProductRes = async () => {
      const productResult = getProduct("https://localhost:7174/product", id);
      setProduct(await productResult);
    };
    getProductRes();
  };

  return (
    <>
      <h1>Product</h1>
      <input placeholder="Product Id" onChange={e => setId(e.target.value)} />
      <button onClick={onGetProduct}>Get product by Id</button>
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
