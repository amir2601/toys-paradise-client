import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='mt-6'>
            <div className="flex items-center gap-4">
                <span className='h-px flex-1 bg-base-300'></span>
                <span className='text-xs font-semibold uppercase tracking-widest text-slate-400'>OR</span>
                <span className='h-px flex-1 bg-base-300'></span>
            </div>
            <div className='mt-5 flex justify-center gap-4'>
                <button type='button' onClick={handleGoogleLogin} className="btn btn-circle border-base-300 bg-base-100 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary">
                    <FaGoogle></FaGoogle>
                </button>
                <button type='button' className="btn btn-circle border-base-300 bg-base-100 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary">
                    <FaGithub></FaGithub>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
