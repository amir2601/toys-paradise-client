import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo1.png'
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [imgError, setImgError] = useState(false);
    const hamburgerRef = useRef(null);
    const wasOpenBeforeClick = useRef(false);

    // Reset the image fallback whenever the signed-in user changes.
    useEffect(() => {
        setImgError(false);
    }, [user?.photoURL]);

    const handleHamburgerMouseDown = () => {
        // Runs before the browser's default mousedown focus, so it captures
        // whether the toggle was already focused (menu open) before this press.
        wasOpenBeforeClick.current = document.activeElement === hamburgerRef.current;
    };

    const handleHamburgerClick = () => {
        // If the menu was already open, this click should close it.
        if (wasOpenBeforeClick.current) {
            document.activeElement?.blur();
        }
    };

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error.message);
            })
    }

    const navLinkClass = ({ isActive }) =>
        `nav-link${isActive ? ' nav-link-active' : ''}`;

    const navItems = <>
        <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
        <li><NavLink to="/allToys" className={navLinkClass}>All Toys</NavLink></li>
        <li><NavLink to="/blog" className={navLinkClass}>Blog</NavLink></li>
        {
            user?.email && <>
                <li><NavLink to='/addToy' className={navLinkClass}>Add Toys</NavLink></li>
                <li><NavLink to='/myToys' className={navLinkClass}>My Toys</NavLink></li>
            </>
        }

    </>

    return (
        <header className='sticky top-0 z-50 border-b border-base-300/70 bg-base-100/80 backdrop-blur-xl'>
            <div className='container-x'>
                <div className="navbar min-h-[4.5rem] px-0">
                    <div className="navbar-start">
                        <Link to="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                            <img src={logo} alt="Toys Paradise" className='h-11 w-auto' />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal items-center gap-1 px-1">
                            {navItems}
                            {
                                user && <li className='ml-1'><button onClick={handleLogOut} className="btn btn-outline btn-primary btn-sm !h-auto !min-h-0 !p-0 rounded-full"><span className="flex items-center justify-center px-5 py-2 leading-none">Log Out</span></button></li>
                            }
                        </ul>
                    </div>
                    <div className="navbar-end gap-2">
                        <div className="dropdown dropdown-end">
                            <label
                                ref={hamburgerRef}
                                tabIndex={0}
                                onMouseDown={handleHamburgerMouseDown}
                                onClick={handleHamburgerClick}
                                aria-label="Toggle navigation menu"
                                className="btn btn-ghost btn-circle lg:hidden"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 w-60 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-soft">
                                {navItems}
                                {
                                    user && <li className='mt-1'><button onClick={handleLogOut} className="btn btn-primary btn-sm !h-auto !min-h-0 !p-0 rounded-full"><span className="flex items-center justify-center px-5 py-2 leading-none text-white">Log Out</span></button></li>
                                }
                            </ul>
                        </div>
                        {
                            user ?
                                <div className='tooltip tooltip-bottom' data-tip={user.displayName || user.email}>
                                    <div className='grid h-11 w-11 overflow-hidden rounded-full ring-2 ring-violet-500 ring-offset-2 ring-offset-base-100 transition-transform duration-300 hover:scale-105'>
                                        {
                                            user?.photoURL && !imgError
                                                ? <img
                                                    src={user.photoURL}
                                                    alt={user.displayName || 'Profile'}
                                                    referrerPolicy='no-referrer'
                                                    onError={() => setImgError(true)}
                                                    className='h-full w-full rounded-full object-cover'
                                                />
                                                : <span className='grid h-full w-full place-items-center bg-gradient-to-br from-violet-600 to-fuchsia-500 text-sm font-bold uppercase text-white'>
                                                    {user?.displayName?.[0] || user?.email?.[0] || 'U'}
                                                </span>
                                        }
                                    </div>
                                </div> :
                                <Link to='/login' className="btn btn-primary btn-pill px-6 shadow-lg shadow-primary/25">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
