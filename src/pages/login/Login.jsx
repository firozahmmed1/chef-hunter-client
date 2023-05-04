import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle} from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
const Login = () => {
    const [error, setError] = useState('')
    const {logInUser, signInGoogle,signInGitHub} = useContext(AuthContext); 
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLoginInfo =event=>{
           event.preventDefault();
           const form = event.target;
           const email = form.email.value;
           const password = form.password.value;
           logInUser(email,password)
           .then(result => {
            form.reset('')
            navigate(from, {replace:true})
           })
           .catch(error =>{
            console.error(error);
            setError(error.message)
           })
    }
    const handleGoogle =()=>{
        signInGoogle()
        .then(result =>{
            navigate(from, {replace:true})

        })
        .catch(error =>{
            setError(error.message)
        })
   }
   const handleGitHub =()=>{
        signInGitHub()
        .then(result =>{
            navigate(from, {replace:true})
        })
        .catch(error =>{
            setError(error.message)
        })
   }
    return (
        <div className='lg:container'>
            <h1 className='text-center text-5xl font-bold mt-8'>Login now!</h1>
                <p className='text-red-600 text-center mt-2'>{error}</p>        
                <div className="hero-content flex-col lg:flex-row-reverse"> 
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginInfo} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" required placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary normal-case">Login</button>
                            </div>
                            <div className="form-control mt-1">
                                <button onClick={handleGoogle} className="btn btn-outline btn-accent normal-case"><span className='mr-1'><FaGoogle></FaGoogle></span> Login with Google</button>
                            </div>
                            <div className="form-control mt-1">
                                <button onClick={handleGitHub} className="btn btn-outline normal-case"><span className='mr-1'><FaGithub></FaGithub></span>Login with Github</button>
                            </div>
                            <p className='text-center'><small>No account yet? <span className='underline text-blue-600'><Link to="/registration">Sign up</Link></span></small></p>
                        </form>
                    </div>
                </div>
           
        </div>
    );
};

export default Login;