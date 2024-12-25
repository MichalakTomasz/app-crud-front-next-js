"use client";

import { deleteProduct } from "@services/controllerService";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { baseUrl } from "@services/commonConsts";

const Page = () => {
  const [deleteResult, setDeleteResult] = useState(undefined);
  const doDeleteProduct = async (value) => {
    const deleteRes = await deleteProduct(
      baseUrl + '/product',
      value.id
    );
    setDeleteResult(deleteRes);
  };

  const formik = useFormik({
    initialValues: {
      id: 0,
    },
    onSubmit: (value) => {
      doDeleteProduct(value);
    },
  });

  return (
    <>
      <h1>Delete Product</h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="id"
          label="Id"
          type="text"
          onChange={formik.handleChange}
        />
        <Button variant="contained" type="submit">
          Delete
        </Button>
      </form>
      <div hidden={deleteResult == undefined || deleteResult == false}>
        Delete product successfull
      </div>
      <div hidden={deleteResult == undefined || deleteResult == true}>
        Delete product error
      </div>
    </>
  );
};

export default Page;
