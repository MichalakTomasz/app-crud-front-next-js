'use client'

import { useAuthService } from "@services/AuthContext";
import { Form, Field } from 'react-final-form';

const Page = () => {
    const authService = useAuthService();
    const onSubmit = (values) => {
        authService.setAuth(values.email, values.password, 'LogIn');
        console.log(authService);
    }

    return (
        <>
            <h1>LogIn</h1>
            <Form 
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
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