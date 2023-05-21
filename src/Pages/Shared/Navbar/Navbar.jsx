import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo1.png'
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error.message);
            })
    }

    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allToys">All Toys</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        {
            user?.email && <>
                <li><NavLink to='/addToy'>Add Toys</NavLink></li>
                <li><NavLink to='/myToys'>My Toys</NavLink></li>
            </>
        }

    </>

    return (
        <div>
            <div className="navbar bg-base-100 h-28 mb-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                            {
                                user && <Link onClick={handleLogOut} className="btn btn-outline btn-primary">Log Out</Link> 
                            }
                        </ul>
                    </div>
                    <Link>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                        {
                            user && <Link onClick={handleLogOut} className="btn btn-outline btn-primary">Log Out</Link>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? 
                        <div className='tooltip tooltip-bottom' data-tip={user.displayName}>
                            <img className='rounded-full w-16' src={user?.photoURL} alt="" />
                        </div> : 
                        <Link to='/login' className="btn btn-outline btn-primary">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;