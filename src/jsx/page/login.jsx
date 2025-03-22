
import './login.css';
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    loginEmail: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    loginPassword: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
});

const Login = () => {
    const navigate = useNavigate();


    const [isSignup, setIsSignup] = useState(false);

    const defaultUser = {
        userName: "admin@gmail.com",
        password: "admin@123"
    }

    const [errorMessage, setErrorMessage] = useState(null);


    return (
        <>
            <div className='login-wrapper'>
                <div className="wrapper">
                    <div className="d-flex flex-col title-text">
                        <div className={`title login`}>
                            Sign In
                        </div>
                        {/* <p>Enter your credentials to access your account</p> */}
                    </div>
                    <div className="form-container">
                        <div className="form-inner" style={{ marginLeft: isSignup ? "-100%" : "0" }}>
                            <Formik
                                initialValues={{
                                    loginEmail: '',
                                    loginPassword: '',
                                }}
                                validationSchema={LoginSchema}
                                onSubmit={values => {
                                    console.log(values);

                                    if ((values?.loginEmail === defaultUser?.userName) && (values?.loginPassword === defaultUser?.password)) {
                                        console.log("isvalid");
                                        Swal.fire({
                                            title: "Login successfully",
                                            icon: "success",
                                            iconColor: "#36AA00",
                                            confirmButtonColor: "#36AA00",
                                            confirmButtonText: "Okay"
                                        })
                                        
                                        localStorage?.setItem("access-token", "isValid");
                                        navigate('/dashboard')
                                    }
                                    else {
                                        Swal.fire({
                                            title: "Your credentials not match",
                                            icon: "warning",
                                            iconColor: "#CA0505",
                                            confirmButtonColor: "#CA0505",
                                            confirmButtonText: "Okay"
                                        })

                                        setErrorMessage("Your credentials not Match")
                                    }
                                }}
                            >
                                {({ errors, touched }) => {
                                    console.log(errors);

                                    return (
                                        <Form className="login">
                                            <div className="field mb-3">
                                                <label htmlFor="loginEmail" className='font-bold mb-2'>Username</label>
                                                <Field
                                                    type="text"
                                                    name='loginEmail'
                                                    id='loginEmail'
                                                    placeholder="Email Address"
                                                    required
                                                />
                                                <ErrorMessage name="loginEmail" component="div" className='text-danger mt-2' />
                                            </div>
                                            <div className="field mt-2">
                                                <label htmlFor="loginPassword" className='font-bold mb-2'>Password</label>
                                                <Field
                                                    type="password"
                                                    name='loginPassword'
                                                    id='loginPassword'
                                                    placeholder="Password"
                                                    required
                                                />
                                                <ErrorMessage name="loginPassword" component="div" className='text-danger mt-2' />
                                            </div>

                                            <div>
                                                <p>Hint : Username is 'admin' and password is 'admin'</p>
                                            </div>

                                            <div className="field btn">
                                                <div className="btn-layer"></div>
                                                <Field type="submit" value="Login" />
                                            </div>

                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;