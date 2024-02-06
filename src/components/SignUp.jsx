// import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useContext, useState } from 'react';
// import auth from './firebase/firebase.config';
import { Link } from 'react-router-dom';
import { userContext } from './UserProviderByContext';

const SignUp = () => {

    const {createUser, emailVerification} = useContext(userContext)
    
    const [successful, setSuccessful] = useState('')
    const [errors, setError] = useState('')
    const [showPass, setShowPass] = useState(false);

    const HandleRegister = e => {
        console.log(e)
        e.preventDefault();
        const emailField = e.target.email.value;
        const passwordField = e.target.password.value;
        console.log(emailField, passwordField);

        setSuccessful("")
        setError("")

        if (passwordField.length < 6) {
            setError('Password must be at least 6 characters or longer');
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+-/|:"';])(?=.*[0-9])/.test(passwordField)) {
            setError('Your password should be at least UpperCase, Special Character and number like :- (A-Z, 0-9, !@#$%^&*()_+-/|:;)');
            return;
        }


        createUser(emailField, passwordField)
            .then(result => {

                        const userInfo = result.user;
                        console.log(userInfo);
                        setSuccessful("User created successfully.")

                        /* verfication ekbari kora hoy. user jei email ta use krtase oita valid kina sheta janar jonne. tai user jokhn register krbe tokhn check krbo j tar email ta verified kina */
                        emailVerification(userInfo)
                            .then(() => {
                                alert("Please verify your email")
                            })
                    })
            .catch(error => {
                        console.log(error)
                        setError(error.message)
                    })

        // creating user
        // createUserWithEmailAndPassword(auth, emailField, passwordField)
        //     .then(result => {
        //         const userInfo = result.user;
        //         console.log(userInfo.email);
        //         setSuccessful("User created successfully.")
                

        //         /* verfication ekbari kora hoy. user jei email ta use krtase oita valid kina sheta janar jonne. tai user jokhn register krbe tokhn check krbo j tar email ta verified kina */
        //         sendEmailVerification(result.user)
        //             .then(() => {
                        
        //                 alert("Please verify your email")
        //             })
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         setError(error.message)
        //     })
    }


    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Please Signup NOW!</h1>
                    </div>
                    <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={HandleRegister} class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    placeholder="password"
                                    name='password' class="input input-bordered"
                                    required />
                                <span onClick={() => setShowPass(!showPass)} >{showPass ? "Hide" : "Show"}</span>
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a><br/>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Signup</button>
                                {
                                    successful && <p className='p-2 text-green-500'>{successful}</p>
                                }
                                {
                                    errors && <p className='p-2 text-red-500'>{errors}</p>
                                }
                                <p className='mt-2'>Already registered? Please <Link to='/login' className="text-blue-500 underline">Log in</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default SignUp;