'use client';

import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { baseUrl } from "@services/commonConsts";
import { useFormik } from "formik";
import { updateProduct } from "@services/controllerService";
import "../../styles/globals.css";;

const Page = () => {
  const [updateProductResult, setUpdateProductResult] = useState(undefined);
  const doUpdateProduct = async (values) => {
    const updateProductRes = await updateProduct(baseUrl + "/product", {
      id: values.id,
      name: values.name,
      code: values.code,
      description: values.description,
      urlPicture: values.urlPicture,
      price: values.price,
    });
    const result = updateProductRes?.id > 0;
    setUpdateProductResult(result);
  };

  const formik = useFormik({
    initialValues: {
      id: 0,
      name: "",
      code: "",
      description: "",
      urlPisture: "",
      price: 0,
    },
    onSubmit: (values) => {
      doUpdateProduct(values);
    }
  });

  return (
    <>
      <h1>Update product</h1>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ "& .MuiTextField-root": { m: 1, width: "50ch" }, width: 400 }}
      >
        <TextField
          label="id"
          name="id"
          type="text"
          onChange={formik.handleChange}
        />
        <TextField
          label="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
        />
        <TextField
          label="code"
          name="code"
          type="text"
          onChange={formik.handleChange}
        />
        <TextField
          label="Description"
          name="description"
          type="text"
          onChange={formik.handleChange}
        />
        <TextField
          label="Url Picture"
          name="urlPicture"
          type="text"
          onChange={formik.handleChange}
        />
        <TextField
          label="Price"
          name="price"
          type="text"
          onChange={formik.handleChange}
        />
        <Button variant="contained" type="submit">
          Update
        </Button>
      </Box>
      <div
        hidden={
          updateProductResult == undefined || updateProductResult == false
        }
      >
        Update added successfull
      </div>
      <div
        hidden={updateProductResult == undefined || updateProductResult == true}
      >
        Update product error
      </div>
    </>
  );
};

export default Page;
