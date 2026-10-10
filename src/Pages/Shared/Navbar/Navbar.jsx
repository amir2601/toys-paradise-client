import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../../assets/logo1.png';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [imgError, setImgError] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const hamburgerRef = useRef(null);
    const wasOpenBeforeClick = useRef(false);

    useEffect(() => {
        setImgError(false);
    }, [user?.photoURL]);

    // Elevate the header once the page is scrolled.
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleHamburgerMouseDown = () => {
        wasOpenBeforeClick.current = document.activeElement === hamburgerRef.current;
    };

    const handleHamburgerClick = () => {
        if (wasOpenBeforeClick.current) {
            document.activeElement?.blur();
        }
    };

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error.message);
            });
    };

    const navLinkClass = ({ isActive }) =>
        `relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
            isActive ? 'text-white' : 'text-slate-600 hover:text-violet-700'
        }`;

    const Pill = () => (
        <motion.span
            layoutId='nav-pill'
            className='absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-soft'
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        />
    );

    const navItems = (
        <>
            <li>
                <NavLink to='/' className={navLinkClass}>
                    {({ isActive }) => (
                        <>
                            {isActive && <Pill />}
                            <span className='relative z-10'>Home</span>
                        </>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink to='/allToys' className={navLinkClass}>
                    {({ isActive }) => (
                        <>
                            {isActive && <Pill />}
                            <span className='relative z-10'>All Toys</span>
                        </>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink to='/blog' className={navLinkClass}>
                    {({ isActive }) => (
                        <>
                            {isActive && <Pill />}
                            <span className='relative z-10'>Blog</span>
                        </>
                    )}
                </NavLink>
            </li>
            {user?.email && (
                <>
                    <li>
                        <NavLink to='/addToy' className={navLinkClass}>
                            {({ isActive }) => (
                                <>
                                    {isActive && <Pill />}
                                    <span className='relative z-10'>Add Toys</span>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/myToys' className={navLinkClass}>
                            {({ isActive }) => (
                                <>
                                    {isActive && <Pill />}
                                    <span className='relative z-10'>My Toys</span>
                                </>
                            )}
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'border-b border-base-300/80 bg-base-100/90 shadow-card backdrop-blur-xl'
                    : 'border-b border-transparent bg-base-100/60 backdrop-blur-md'
            }`}
        >
            <div className='container-x'>
                <div className='navbar min-h-[4.5rem] px-0'>
                    <div className='navbar-start'>
                        <Link
                            to='/'
                            aria-label='Toys Paradise — home'
                            className='pressable flex items-center transition-transform duration-300 hover:scale-105'
                        >
                            <span className='relative'>
                                <img src={logo} alt='Toys Paradise' className='h-12 w-auto' />
                                <span className='absolute -right-1.5 -top-1.5 h-3 w-3 animate-ping rounded-full bg-amber-400'></span>
                            </span>
                        </Link>
                    </div>

                    <div className='navbar-end gap-2'>
                        {/* Desktop nav */}
                        <ul className='menu menu-horizontal hidden items-center gap-1 rounded-full border border-base-300/70 bg-base-100/70 px-2 py-1.5 shadow-sm backdrop-blur lg:flex'>
                            {navItems}
                            {user && (
                                <li className='ml-1'>
                                    <button
                                        onClick={handleLogOut}
                                        className='pressable rounded-full border border-violet-200 px-5 py-2 text-sm font-bold text-violet-700 transition-all duration-300 hover:border-violet-600 hover:bg-violet-600 hover:text-white'
                                    >
                                        Log Out
                                    </button>
                                </li>
                            )}
                        </ul>

                        {/* Mobile hamburger */}
                        <div className='dropdown dropdown-end lg:hidden'>
                            <label
                                ref={hamburgerRef}
                                tabIndex={0}
                                onMouseDown={handleHamburgerMouseDown}
                                onClick={handleHamburgerClick}
                                aria-label='Toggle navigation menu'
                                className='btn btn-circle border border-base-300 bg-white text-slate-700 shadow-sm transition-transform duration-200 hover:scale-105 hover:text-violet-700'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className='menu menu-compact dropdown-content mt-3 w-64 rounded-2xl border border-base-300 bg-base-100 p-3 shadow-soft'
                            >
                                {navItems}
                                {user && (
                                    <li className='mt-2 border-t border-base-200 pt-2'>
                                        <button
                                            onClick={handleLogOut}
                                            className='w-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-2.5 text-sm font-bold text-white shadow-soft transition-transform duration-200 hover:scale-[1.03]'
                                        >
                                            Log Out
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </div>

                        {/* Auth */}
                        {user ? (
                            <div className='tooltip tooltip-bottom' data-tip={user.displayName || user.email}>
                                <div className='relative'>
                                    <span className='absolute right-0 top-0 z-10 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-base-100'></span>
                                    <div className='grid h-11 w-11 overflow-hidden rounded-full ring-2 ring-violet-500 ring-offset-2 ring-offset-base-100 transition-transform duration-300 hover:scale-105 hover:rotate-3'>
                                        {user?.photoURL && !imgError ? (
                                            <img
                                                src={user.photoURL}
                                                alt={user.displayName || 'Profile'}
                                                referrerPolicy='no-referrer'
                                                onError={() => setImgError(true)}
                                                className='h-full w-full rounded-full object-cover'
                                            />
                                        ) : (
                                            <span className='grid h-full w-full place-items-center bg-gradient-to-br from-violet-600 to-fuchsia-500 text-sm font-bold uppercase text-white'>
                                                {user?.displayName?.[0] || user?.email?.[0] || 'U'}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                to='/login'
                                className='btn btn-shine pressable gap-2 rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 font-bold text-white shadow-soft transition-all duration-300 hover:shadow-lift'
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;