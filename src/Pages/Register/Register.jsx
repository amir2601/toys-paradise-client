import React, { useContext, useState } from 'react';
import SignUpImg from '../../assets/login/signup.png'
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useTitle from '../../Hooks/useTitle';


const Register = () => {
    useTitle('Register');
    const [error, setError] = useState('')
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
                console.log(user);
                const profile = { displayName: name };
                if (photo) profile.photoURL = photo;
                return updateProfile(user, profile)
                    .then(() => {
                        form.reset();
                        setError('')
                    })
                    .catch(error => {
                        console.log(error.message);
                        setError(error.message)
                    })
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }

    return (
        <div className='container-x section'>
            <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft lg:grid-cols-2">
                <div className="relative hidden items-center justify-center overflow-hidden bg-gradient-to-br from-fuchsia-500 to-violet-600 p-10 lg:flex">
                    <div className='absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-amber-400/40 blur-2xl'></div>
                    <img src={SignUpImg} alt="" className='relative z-10 w-full max-w-xs drop-shadow-xl' />
                </div>

                <div className="p-8 sm:p-10">
                    <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Create Account</h1>
                    <p className='mt-2 text-sm text-slate-500'>Join Toys Paradise in a few seconds.</p>
                    <p className='mt-3 text-sm font-medium text-error'>{error}</p>

                    <form onSubmit={handleSignUp} className='mt-6 space-y-4'>
                        <div className="form-control">
                            <label className="field-label">Name</label>
                            <input type="text" name='name' placeholder="Your name" className="field-input" />
                        </div>
                        <div className="form-control">
                            <label className="field-label">Email</label>
                            <input type="email" name='email' placeholder="you@example.com" className="field-input" required />
                        </div>
                        <div className="form-control">
                            <label className="field-label">Photo URL</label>
                            <input type="text" name='photo' placeholder="https://..." className="field-input" />
                        </div>
                        <div className="form-control">
                            <label className="field-label">Password</label>
                            <input type="password" name='password' placeholder="••••••••" className="field-input" required />
                        </div>
                        <div className="form-control pt-2">
                            <input className="btn btn-primary btn-pill w-full py-3 shadow-lg shadow-primary/25" type="submit" value="Sign Up" />
                        </div>
                        <p className='text-center text-sm text-slate-500'>
                            Already have an account? <Link to='/login' className="font-semibold text-violet-700 hover:underline">Login</Link>
                        </p>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
