import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
const Registration = () => {
    const [error, setError] =useState('');
    const {createUser} = useContext(AuthContext);
    
    const navigate = useNavigate();
    const handleResgistrationInfo =event=>{
        event.preventDefault() 
        const form = event.target;
        const name = form.name.value;
        const email=form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        if(password.length <6){
            setError('Passworrd should be at least 6 characters')
        }
        createUser(email, password)
        .then(result=>{
            const singUp = result.user;
            console.log(singUp)
            form.reset('')
            navigate('/login')
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
        })

    }
     
    return (
        <div className='lg:container'>
        <h1 className='text-center text-5xl font-bold mt-8'>Registration now!</h1>
            <div className="hero-content flex-col lg:flex-row-reverse">         
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleResgistrationInfo} className="card-body">
                        <div className="form-control">
                            <p className='text-red-700'>{error}</p>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input  type="password" placeholder="password" name="password" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo url" name="photo" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary normal-case">Sign up</button>
                        </div>
                        <p className='text-center'><small>Already have an account?<span className='underline text-blue-600'><Link to="/login">Login</Link></span></small></p>
                    </form>
                </div>
            </div>
       
    </div>
    );
};

export default Registration;