'use client'

import { registerAccount } from "@services/controllerService";
import { Form, Field } from "react-final-form";

const Page = () => {
  const onSubmit = (values) => {
    const doRegisterAccount = async () => {
      await registerAccount('https://localhost:7174/auth/register', {
        email: values.email,
        password: values.password,
      });
    };
    doRegisterAccount();
  };
  return (
    <>
      <h1>Register Account</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label name="email">Email</label>
              <Field
                name="email"
                component="input"
                type="text"
                placeholder="email"
              />
            </div>
            <div>
              <label name="password">Password</label>
              <Field
                name="password"
                component="input"
                type="text"
                placeholder="password"
              />
            </div>
            <button type="submit">Register Account</button>
          </form>
        )}
      />
    </>
  );
};

export default Page;
