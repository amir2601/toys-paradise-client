import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Error = () => {
    useTitle('Error');
    return (
        <div className='container-x section'>
            <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-700 via-violet-600 to-fuchsia-500 text-center shadow-soft">
                <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-amber-400/30 blur-3xl"></div>
                <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl"></div>

                <div className="relative z-10 px-6 font-mono">
                    <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                        You are all alone here
                    </h1>
                    <p className="my-8 text-7xl font-extrabold text-white/90 animate-bounce sm:text-9xl">
                        404
                    </p>
                    <Link to="/" className="btn btn-pill border-0 bg-white px-8 text-lg font-semibold text-violet-700 shadow-lg hover:bg-amber-50">Back To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
