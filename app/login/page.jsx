'use client'

import { auth } from "@services/controllerService";
import React from "react";
import { Form, Field } from 'react-final-form';

const Page = () => {
    const onSubmit = (values) => {
        const doLogin = async () => {
            const loginResult = await auth(
                'https://localhost:7174/auth', {
                    credentials: {
                        email: values.email,
                        password: values.password
                    },
                    authType: 'LogIn'
                });
                localStorage.setItem('userData', JSON.stringify(loginResult));
        }
        doLogin();
    }

    return (
        <>
            <h1>LogIn</h1>
            <Form 
            onSubmit={onSubmit}
            render={({ handlerSubmit }) => (
                <form onSubmit={handlerSubmit}>
                    <div>
                        <label name='email'>Email</label>
                        <Field name='email' component='input' type="text"placeholder='Email'/>
                    </div>
                    <div>
                        <label name='password'>Password</label>
                        <Field name='password' component='input' type="text"placeholder='Password'/>
                    </div>
                    <button type='submit'>LogIn</button>
                </form>
            )}
            />
        </>
    );
}

export default Page;