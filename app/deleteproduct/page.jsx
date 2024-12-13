"use client";

import { deleteProduct } from "@services/controllerService";
import { Form, Field } from "react-final-form";

const Page = () => {
  const onSubmit = (values) => {
    const doDeleteProduct = async () => {
      await deleteProduct("https://localhost:7174/product", values.id);
    };
    doDeleteProduct();
  };

  return (
    <>
      <h1>Delete Product</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label name="id">Id</label>
              <Field name="id" component="input" type="text" placeholder="Id" />
            </div>
            <button type="submit">Delete</button>
          </form>
        )}
      />
    </>
  );
};

export default Page;
