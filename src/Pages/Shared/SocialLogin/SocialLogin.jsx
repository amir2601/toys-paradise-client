import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center flex gap-4 justify-center'>
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-primary btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-circle btn-primary btn-outline">
                    <FaGithub></FaGithub>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;