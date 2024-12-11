'use client'

import { addProduct } from "@services/controllerService";
import React from "react";
import { Form, Field } from "react-final-form";

const Page = () => {
  const onSubmit = (values) => {
    const doAddProduct = async () => {
      const addProductResult = await addProduct(
        'https://localhost:7174/product',
        {
          name: values.name,
          code: values.code,
          description: values.description,
          urlPicture: values.urlPicture,
          price: values.price,
        }
      );
    };
    doAddProduct();
  };

  return (
    <>
      <h1>Add product</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handlerSubmit }) => (
          <form onSubmit={handlerSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="code">Code</label>
              <Field
                name="code"
                component="input"
                type="text"
                placeholder="Code"
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <Field
                name="description"
                component="input"
                type="text"
                placeholder="Description"
              />
            </div>
            <div>
              <label htmlFor="urlPicture">UrlPicture</label>
              <Field
                name="urlPicture"
                component="input"
                type="text"
                placeholder="UrlPicture"
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <Field
                name="price"
                component="input"
                type="text"
                placeholder="Price"
              />
            </div>
            <button type="submit">Save</button>
          </form>
        )}
      />
    </>
  );
};

export default Page;
