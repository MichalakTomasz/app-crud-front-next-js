'use client'

import { Button, TextField } from '@node_modules/@mui/material';
import { registerAccount } from '@services/controllerService';
import { useState } from 'react';
import { useFormik } from 'formik';

const Page = () => {
  const [registerResult, setRegisterResult] = useState(undefined);
  
    const doRegisterAccount = async (values) => {
      const result = await registerAccount('https://localhost:7174/auth/register', {
        email: values.email,
        password: values.password,
      });
      setRegisterResult(result);
    };

    const formik = useFormik({
      initialValues: {
        email : '',
        password: ''
      },
      onSubmit: (values) => {
        doRegisterAccount(values);
      }
    });
    
  return (
    <>
      <h1>Register Account</h1>
          <form onSubmit={formik.handleSubmit}>
              <TextField
                label='email'
                name="email"
                type="text"
                onChange={formik.handleChange}
              />
              <TextField
                label='password'
                name='password'
                type='password'
                onChange={formik.handleChange}
              />
            <Button variant="contained" type="submit">Register Account</Button>
          </form>
      <div hidden={registerResult == undefined || registerResult == false}>Registered successfull</div>
      <div hidden={registerResult == undefined || registerResult == true}>Register error</div>
    </>
  );
};

export default Page;
