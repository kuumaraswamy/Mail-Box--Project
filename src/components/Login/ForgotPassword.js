import { useRef } from 'react';
import React from 'react';
import classes from './SignUp.module.css';

const ForgotPassword = (props) => {
    const emailInputRef = useRef('');

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        props.onForgot(enteredEmail);
    ;}

    return (
        <section className={classes.signUp}>
            <h2>Forgot Password ?</h2>
            <form onSubmit={submitHandler}>
                <input
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    required
                    ref={emailInputRef}
                />
                <button>Submit</button>
            </form>
        </section>
    )
};

export default ForgotPassword;