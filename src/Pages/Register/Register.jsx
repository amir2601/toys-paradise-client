import React, { useContext, useState } from 'react';
import SignUpImg from '../../assets/login/signup.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaUser, FaCamera } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useTitle from '../../Hooks/useTitle';
import PageTransition from '../../Components/Animations/PageTransition';

const ease = [0.16, 1, 0.3, 1];

const Register = () => {
    useTitle('Register');
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                const profile = { displayName: name };
                if (photo) profile.photoURL = photo;
                return updateProfile(user, profile)
                    .then(() => {
                        form.reset();
                        setError('');
                    })
                    .catch(error => {
                        console.error(error.message);
                        setError(error.message);
                    });
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
                    <div className="relative hidden items-center justify-center overflow-hidden bg-gradient-to-br from-fuchsia-500 via-violet-600 to-fuchsia-500 bg-[length:200%_200%] p-10 animate-gradient-x lg:flex">
                        <div className='pattern-dots absolute inset-0 opacity-40'></div>
                        <motion.div
                            className='absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-amber-400/40 blur-2xl'
                            animate={{ scale: [1, 1.25, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        ></motion.div>
                        <motion.div
                            className='absolute -top-10 -right-10 h-44 w-44 rounded-full bg-fuchsia-300/40 blur-2xl'
                            animate={{ scale: [1.25, 1, 1.25] }}
                            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                        ></motion.div>

                        <motion.img
                            src={SignUpImg}
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
                            <p className='text-sm font-bold'>Join free — start selling toys today 🎉</p>
                        </motion.div>
                    </div>

                    <div className="p-8 sm:p-10">
                        <span className='eyebrow'>Join the club</span>
                        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Create Account</h1>
                        <p className='mt-2 text-sm text-slate-500'>Join Toys Paradise in a few seconds.</p>
                        <p className='mt-3 text-sm font-medium text-error' role='alert'>{error}</p>

                        <form onSubmit={handleSignUp} className='mt-6 space-y-4'>
                            <div className="form-control">
                                <label className="field-label" htmlFor='name'>Name</label>
                                <div className='relative'>
                                    <FaUser className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400' />
                                    <input id='name' type="text" name='name' placeholder="Your name" className="field-input !pl-11" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="field-label" htmlFor='signup-email'>Email</label>
                                <div className='relative'>
                                    <FaEnvelope className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400' />
                                    <input id='signup-email' type="email" name='email' placeholder="you@example.com" className="field-input !pl-11" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="field-label" htmlFor='photo'>Photo URL</label>
                                <div className='relative'>
                                    <FaCamera className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400' />
                                    <input id='photo' type="text" name='photo' placeholder="https://..." className="field-input !pl-11" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="field-label" htmlFor='signup-password'>Password</label>
                                <div className='relative'>
                                    <FaLock className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400' />
                                    <input id='signup-password' type="password" name='password' placeholder="••••••••" className="field-input !pl-11" required />
                                </div>
                            </div>
                            <div className="form-control pt-2">
                                <input
                                    className="btn btn-shine pressable w-full rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 py-3 text-base font-bold text-white shadow-soft transition-all duration-300 hover:shadow-lift"
                                    type="submit"
                                    value="Sign Up"
                                />
                            </div>
                            <p className='text-center text-sm text-slate-500'>
                                Already have an account?{' '}
                                <Link to='/login' className="font-semibold text-violet-700 underline-offset-4 hover:underline">
                                    Login
                                </Link>
                            </p>
                            <SocialLogin />
                        </form>
                    </div>
                </motion.div>
            </div>
        </PageTransition>
    );
};

export default Register;