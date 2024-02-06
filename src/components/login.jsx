import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase/firebase.config";
import {  useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { userContext } from "./UserProviderByContext";


export default function Login(){

    const {singInUser, passwordReset} = useContext(userContext)
    const [successful, setSuccessful] = useState('')
    const [errors, setError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const emailRef = useRef(null)
    

    const HandleLogIn = e =>{
        e.preventDefault();
        const emailField = e.target.email.value;
        const passwordField = e.target.password.value;
        console.log(emailField, passwordField);

        setSuccessful("")
        setError("")
        
        singInUser(emailField, passwordField)
            .then(result => {
                        console.log(result.user);
                        setSuccessful("Successfully Logged in")
                    })
            .catch(error => {
                    console.log(error)
                    setError(error.message)
                })
        // creating user
        // signInWithEmailAndPassword(auth, emailField, passwordField)
        // .then(result => {
        //     console.log(result.user);
        //     setSuccessful("Successfully Logged in")
        // })
        // .catch(error => {
        //     console.log(error)
        //     setError(error.message)
        // })
    }

    const handleForgotPassword = () => {
        const validEmail = emailRef.current.value;
        if(!validEmail){ /* jodi kono email na dawa thake */
            console.log("Please enter your emil",  emailRef.current.value) /* ref dia kono field er value pawar jonne ref er vitor thaka current namer property ta use kora lge */
            return;
        }
        else if( !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(validEmail)){ /* email check korar jonne */
            console.log('Please enter your email correctly');
            return;
        }

        //validation of email:- send validation email
        passwordReset(validEmail)
        .then(() =>{
            alert('Please check your email')
        })
        .catch(error => {
            console.log(error)
        })
    }
 
    
    return (
        <>
            <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">Please Login now!</h1>
                </div>
                <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={HandleLogIn} class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input 
                                
                                type="email" 
                                placeholder="email" 
                                ref={emailRef}
                                name='email' 
                                class="input input-bordered" 
                                required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input 
                                type={showPass ? "text" : "password"}
                                placeholder="password" 
                                name="password" 
                                class="input input-bordered" 
                                required />
                            <span onClick={()=>setShowPass(!showPass)}>{showPass ? "Hide" : "Show"}</span>
                            <label class="label">
                                <a onClick={handleForgotPassword} href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                            {
                                successful && <p className='p-2 text-green-500'>{successful}</p>
                            }
                            {
                                errors && <p className='p-2 text-red-500'>Please enter your Email or Password correctly</p>
                            }   
                            <p className="mt-2">New to this website? Please <Link to='/signup' className="text-blue-500 underline">Sign up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            </div>       
 </>
    );
}