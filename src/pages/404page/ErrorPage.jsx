import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='lg:container mx-auto'>
            <img className='w-3/6 mx-auto mt-8' src="https://i.ibb.co/qCN9G3C/404-error-page-not-found.jpg" alt="" />
            <h1 className='text-center text-5xl mt-8'><span className='font-bold'>404.</span> That's an error.</h1>
            <p className='text-center mt-8 text-blue-600'><Link to="/">Back to Homepage</Link></p>
        </div>
    );
};

export default ErrorPage;