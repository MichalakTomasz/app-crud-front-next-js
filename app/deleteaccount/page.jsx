'use client'

const { deleteAccount } = require("@services/controllerService");
const { Form, Field } = require("react-final-form");

const Page = () => {
  const onSubmit = (values) => {
    const doDeleteAccount = async () => {
      await deleteAccount("https://localhost:7174/auth/deleteaccount", {
        guid: values.guid,
      });
    };
    doDeleteAccount();
  };
  return (
    <>
      <h1>Delete account</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label name="guid" />
              <Field
                name="guid"
                component="input"
                type="text"
                placeholder="Guit"
              />
            </div>
            <button type="submit">Delete Account</button>
          </form>
        )}
      />
    </>
  );
};

export default Page;
