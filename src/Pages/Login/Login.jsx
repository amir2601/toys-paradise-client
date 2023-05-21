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
        <div>
            <div className="hero min-h-[80vh] bg-accent rounded-lg">
                <div className="hero-content flex-col lg:flex-row md:justify-evenly">
                    <div className="text-center lg:text-left md:w-1/2">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 md:w-1/2">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold">Login</h1>
                            <p className='text-red-500'>{error}</p>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                                <label className="label">
                                    <p className='label-text-alt '>Don't have an account? <Link to='/signup' className="link link-hover">Register</Link> </p>
                                </label>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;