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
            .then(() => {
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div className='mt-6'>
            <div className="flex items-center gap-4">
                <span className='h-px flex-1 bg-base-300'></span>
                <span className='text-xs font-semibold uppercase tracking-widest text-slate-500'>OR</span>
                <span className='h-px flex-1 bg-base-300'></span>
            </div>
            <div className='mt-5 flex justify-center gap-4'>
                <button type='button' onClick={handleGoogleLogin} className="pressable grid h-12 w-12 place-items-center rounded-full border border-base-200 bg-white text-base text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:bg-gradient-to-br hover:from-violet-600 hover:to-fuchsia-500 hover:text-white hover:shadow-glow">
                    <FaGoogle></FaGoogle>
                </button>
                <button type='button' className="pressable grid h-12 w-12 place-items-center rounded-full border border-base-200 bg-white text-base text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:bg-gradient-to-br hover:from-slate-700 hover:to-slate-900 hover:text-white hover:shadow-glow">
                    <FaGithub></FaGithub>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
