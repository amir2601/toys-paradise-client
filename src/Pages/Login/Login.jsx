import React, { useContext, useState } from 'react';
import loginImg from '../../assets/login/login2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const [error, setError] = useState('');
    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }

    return (
        <div className='container-x section'>
            <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft lg:grid-cols-2">
                <div className="relative hidden items-center justify-center overflow-hidden bg-gradient-to-br from-violet-600 to-fuchsia-500 p-10 lg:flex">
                    <div className='absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/40 blur-2xl'></div>
                    <img src={loginImg} alt="" className='relative z-10 w-full max-w-xs drop-shadow-xl' />
                </div>

                <div className="p-8 sm:p-10">
                    <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Welcome Back</h1>
                    <p className='mt-2 text-sm text-slate-500'>Log in to keep the fun going.</p>
                    <p className='mt-3 text-sm font-medium text-error'>{error}</p>

                    <form onSubmit={handleLogin} className='mt-6 space-y-4'>
                        <div className="form-control">
                            <label className="field-label">Email</label>
                            <input type="email" name='email' placeholder="you@example.com" className="field-input" required />
                        </div>
                        <div className="form-control">
                            <label className="field-label">Password</label>
                            <input type="password" name='password' placeholder="••••••••" className="field-input" required />
                        </div>
                        <div className="form-control pt-2">
                            <input className="btn btn-primary btn-pill w-full py-3 shadow-lg shadow-primary/25" type="submit" value="Login" />
                        </div>
                        <p className='text-center text-sm text-slate-500'>
                            Don't have an account? <Link to='/signup' className="font-semibold text-violet-700 hover:underline">Register</Link>
                        </p>
                    </form>

                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;
