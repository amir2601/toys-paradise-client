import React, { useContext, useState } from 'react';
import loginImg from '../../assets/login/login2.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaUserAstronaut } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useTitle from '../../Hooks/useTitle';
import PageTransition from '../../Components/Animations/PageTransition';

const ease = [0.16, 1, 0.3, 1];

const Login = () => {
    useTitle('Login');
    const [error, setError] = useState('');
    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(() => {
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            });
    };

    return (
        <PageTransition>
            <div className='container-x section'>
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease }}
                    className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lift lg:grid-cols-2"
                >
                    <div className="relative hidden items-center justify-center overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-500 to-violet-600 bg-[length:200%_200%] p-10 animate-gradient-x lg:flex">
                        <div className='pattern-dots absolute inset-0 opacity-40'></div>
                        <motion.div
                            className='absolute -right-10 -top-10 h-44 w-44 rounded-full bg-amber-400/40 blur-2xl'
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        ></motion.div>
                        <motion.div
                            className='absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-fuchsia-300/40 blur-2xl'
                            animate={{ scale: [1.2, 1, 1.2] }}
                            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                        ></motion.div>

                        <motion.img
                            src={loginImg}
                            alt=''
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: [0, -10, 0] }}
                            transition={{ opacity: { duration: 0.6 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
                            className='relative z-10 w-full max-w-xs drop-shadow-xl'
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className='glass absolute bottom-8 left-8 right-8 z-10 rounded-2xl p-4 text-center text-white'
                        >
                            <p className='flex items-center justify-center gap-2 text-sm font-bold'>
                                <FaUserAstronaut /> 5,000+ families already playing
                            </p>
                        </motion.div>
                    </div>

                    <div className="p-8 sm:p-10">
                        <span className='eyebrow'>Welcome back</span>
                        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Let&apos;s Play</h1>
                        <p className='mt-2 text-sm text-slate-500'>Log in to keep the fun going.</p>
                        <p className='mt-3 text-sm font-medium text-error' role='alert'>{error}</p>

                        <form onSubmit={handleLogin} className='mt-6 space-y-4'>
                            <div className="form-control">
                                <label className="field-label" htmlFor='login-email'>Email</label>
                                <div className='relative'>
                                    <FaEnvelope className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400' />
                                    <input id='login-email' type="email" name='email' placeholder="you@example.com" className="field-input !pl-11" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="field-label" htmlFor='login-password'>Password</label>
                                <div className='relative'>
                                    <FaLock className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400' />
                                    <input id='login-password' type="password" name='password' placeholder="••••••••" className="field-input !pl-11" required />
                                </div>
                            </div>
                            <div className="form-control pt-2">
                                <input
                                    className="btn btn-shine pressable w-full rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 py-3 text-base font-bold text-white shadow-soft transition-all duration-300 hover:shadow-lift"
                                    type="submit"
                                    value="Login"
                                />
                            </div>
                            <p className='text-center text-sm text-slate-500'>
                                Don&apos;t have an account?{' '}
                                <Link to='/signup' className="font-semibold text-violet-700 underline-offset-4 hover:underline">
                                    Register
                                </Link>
                            </p>
                        </form>

                        <SocialLogin />
                    </div>
                </motion.div>
            </div>
        </PageTransition>
    );
};

export default Login;