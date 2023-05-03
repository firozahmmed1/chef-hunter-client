import React from 'react';

const Login = () => {
    return (
        <div className='lg:container'>
            <h1 className='text-center text-5xl font-bold mt-8'>Login now!</h1>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary normal-case">Login</button>
                            </div>
                            <div className="form-control mt-1">
                                <button className="btn btn-outline btn-accent normal-case">Login with Google</button>
                            </div>
                            <div className="form-control mt-1">
                                <button className="btn btn-outline normal-case">Login with Github</button>
                            </div>
                        </div>
                    </div>
                </div>
           
        </div>
    );
};

export default Login;