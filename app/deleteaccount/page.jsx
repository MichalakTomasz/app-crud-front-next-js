"use client";

import { Button, TextField } from '@mui/material';
import { deleteAccount } from '@services/controllerService';
import { useState } from 'react';
import { useFormik } from 'formik';
import { baseUrl } from '@services/commonConsts';

const Page = () => {
  const [delResult, setDelResult] = useState(undefined);

  const doDeleteAccount = async (value) => {
    const delRes = await deleteAccount(baseUrl + "/auth/deleteaccount", {
      guid: value.guid,
    });
    setDelResult(delRes);
  };

  const formik = useFormik({
    initialValues: {
      guid: '',
    },
    onSubmit: (value) => {
      doDeleteAccount(value);
    },
  });

  return (
    <>
      <h1>Delete account</h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name='guid'
          label='Guid'
          type='text'
          onChange={formik.handleChange}
        />
        <Button variant="contained" type="submit">
          Delete Account
        </Button>
      </form>
      <div hidden={delResult == undefined || delResult == false}>
        Delete account successfull
      </div>
      <div hidden={delResult == undefined || delResult == true}>
        Delete error
      </div>
    </>
  );
};

export default Page;
