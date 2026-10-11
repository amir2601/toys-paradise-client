import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronRight, FaSignOutAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import logo from '../../../assets/logo1.png';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [imgError, setImgError] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

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

    // Always dismiss the drawer when the route changes.
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Lock body scroll and support Escape while the drawer is open.
    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (event) => {
            if (event.key === 'Escape') setMenuOpen(false);
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKey);
        };
    }, [menuOpen]);

    const handleLogOut = () => {
        logOut()
            .then(() => setMenuOpen(false))
            .catch(error => console.error(error.message));
    };

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/allToys', label: 'All Toys' },
        { to: '/blog', label: 'Blog' },
        ...(user?.email
            ? [
                { to: '/addToy', label: 'Add Toys' },
                { to: '/myToys', label: 'My Toys' },
            ]
            : []),
    ];

    const navLinkClass = ({ isActive }) =>
        `relative flex items-center gap-1.5 !rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
            isActive ? 'text-white' : 'text-slate-600 hover:text-violet-700'
        }`;

    // Shared-layout pill for the desktop links. The id only needs to be unique
    // per nav list so the pill can slide between links without colliding with
    // any other instance on the page.
    const Pill = ({ id }) => (
        <motion.span
            layoutId={id}
            className='absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-soft'
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        />
    );

    const Avatar = ({ className = 'h-11 w-11', textClass = 'text-sm' }) => (
        <div className='relative'>
            <span className='absolute right-0 top-0 z-10 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-base-100'></span>
            <div
                className={`grid ${className} overflow-hidden rounded-full ring-2 ring-violet-500 ring-offset-2 ring-offset-base-100 transition-transform duration-300 hover:scale-105 hover:rotate-3`}
            >
                {user?.photoURL && !imgError ? (
                    <img
                        src={user.photoURL}
                        alt={user.displayName || 'Profile'}
                        referrerPolicy='no-referrer'
                        onError={() => setImgError(true)}
                        className='h-full w-full rounded-full object-cover'
                    />
                ) : (
                    <span
                        className={`grid h-full w-full place-items-center bg-gradient-to-br from-violet-600 to-fuchsia-500 font-bold uppercase text-white ${textClass}`}
                    >
                        {user?.displayName?.[0] || user?.email?.[0] || 'U'}
                    </span>
                )}
            </div>
        </div>
    );

    const headerClasses = scrolled
        ? 'border-b border-base-300/80 bg-base-100/90 shadow-card backdrop-blur-xl'
        : 'border-b border-transparent bg-base-100/60 backdrop-blur-md';

    return (
        <>
        <header className={`sticky top-0 z-50 transition-all duration-300 ${headerClasses}`}>
            <div className='container-x'>
                <div className='navbar min-h-[4.5rem] px-0'>
                    {/* Brand */}
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
                        {/* Desktop navigation (lg and up) */}
                        <ul className='menu menu-horizontal hidden items-center gap-1 rounded-full border border-base-300/70 bg-base-100/70 px-2 py-1.5 shadow-sm backdrop-blur lg:flex'>
                            {navLinks.map((item) => (
                                <li key={item.to}>
                                    <NavLink to={item.to} className={navLinkClass}>
                                        {({ isActive }) => (
                                            <>
                                                {isActive && <Pill id='desktop-nav-pill' />}
                                                <span className='relative z-10'>{item.label}</span>
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                            {user && (
                                <li className='ml-1'>
                                    <button
                                        onClick={handleLogOut}
                                        className='pressable !rounded-full border border-violet-200 px-5 py-2 text-sm font-bold text-violet-700 transition-all duration-300 hover:border-violet-600 hover:bg-violet-600 hover:text-white'
                                    >
                                        Log Out
                                    </button>
                                </li>
                            )}
                        </ul>

                        {/* Compact auth in the header — hidden on the tiniest screens,
                            where it lives inside the drawer instead. */}
                        <div className='hidden items-center sm:flex'>
                            {user ? (
                                <div className='tooltip tooltip-bottom' data-tip={user.displayName || user.email}>
                                    <Avatar />
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

                        {/* Hamburger — tablet + mobile */}
                        <button
                            type='button'
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-label='Toggle navigation menu'
                            aria-expanded={menuOpen}
                            aria-controls='mobile-navigation'
                            className='relative grid h-11 w-11 place-items-center rounded-full border border-base-300 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:scale-105 hover:text-violet-700 active:scale-95 lg:hidden'
                        >
                            <FaBars
                                className={`absolute text-lg transition-all duration-300 ${
                                    menuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                                }`}
                            />
                            <FaTimes
                                className={`absolute text-lg transition-all duration-300 ${
                                    menuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header>

            {/* Off-canvas navigation drawer — tablet + mobile.
                Rendered as a sibling of the header (not inside it) because the
                header's backdrop-blur creates a containing block for fixed
                descendants, which would clip the drawer to the header height. */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            key='nav-backdrop'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setMenuOpen(false)}
                            aria-hidden='true'
                            className='fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-sm lg:hidden'
                        />

                        <motion.aside
                            id='mobile-navigation'
                            key='nav-drawer'
                            role='dialog'
                            aria-modal='true'
                            aria-label='Navigation menu'
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
                            className='fixed inset-y-0 right-0 z-[70] flex w-80 max-w-[85vw] flex-col bg-base-100 shadow-2xl lg:hidden'
                        >
                            {/* Drawer header */}
                            <div className='flex items-center justify-between border-b border-base-200 px-5 py-4'>
                                <Link
                                    to='/'
                                    aria-label='Toys Paradise — home'
                                    className='flex items-center'
                                >
                                    <img src={logo} alt='Toys Paradise' className='h-10 w-auto' />
                                </Link>
                                <button
                                    type='button'
                                    onClick={() => setMenuOpen(false)}
                                    aria-label='Close navigation menu'
                                    className='grid h-10 w-10 place-items-center rounded-full border border-base-300 bg-white text-slate-600 transition-all duration-200 hover:bg-violet-600 hover:text-white active:scale-95'
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* Links */}
                            <nav className='flex-1 overflow-y-auto px-4 py-4'>
                                <ul className='space-y-1.5'>
                                    {navLinks.map((item, index) => (
                                        <motion.li
                                            key={item.to}
                                            initial={{ opacity: 0, x: 24 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 + index * 0.05, duration: 0.3 }}
                                        >
                                            <NavLink
                                                to={item.to}
                                                onClick={() => setMenuOpen(false)}
                                                className={({ isActive }) =>
                                                    `group flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-base font-semibold transition-all duration-200 ${
                                                        isActive
                                                            ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-soft'
                                                            : 'text-slate-600 hover:bg-violet-50 hover:text-violet-700'
                                                    }`
                                                }
                                            >
                                                <span>{item.label}</span>
                                                <FaChevronRight className='text-xs opacity-50 transition-transform duration-200 group-hover:translate-x-1' />
                                            </NavLink>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Auth actions */}
                            <div className='border-t border-base-200 p-4'>
                                {user ? (
                                    <>
                                        <div className='flex items-center gap-3 rounded-2xl bg-base-200/70 p-3'>
                                            <Avatar className='h-11 w-11' />
                                            <div className='min-w-0'>
                                                <p className='truncate text-sm font-bold text-slate-800'>
                                                    {user.displayName || 'Welcome back'}
                                                </p>
                                                <p className='truncate text-xs text-slate-500'>{user.email}</p>
                                            </div>
                                        </div>
                                        <button
                                            type='button'
                                            onClick={handleLogOut}
                                            className='mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-2.5 text-sm font-bold text-white shadow-soft transition-transform duration-200 hover:scale-[1.02] active:scale-95'
                                        >
                                            <FaSignOutAlt /> Log Out
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to='/login'
                                            onClick={() => setMenuOpen(false)}
                                            className='btn btn-shine pressable flex w-full items-center justify-center gap-2 rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 font-bold text-white shadow-soft transition-all duration-300 hover:shadow-lift'
                                        >
                                            <FaSignInAlt /> Login
                                        </Link>
                                        <Link
                                            to='/signup'
                                            onClick={() => setMenuOpen(false)}
                                            className='mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-violet-200 bg-white px-5 py-2.5 text-sm font-bold text-violet-700 transition-all duration-200 hover:border-violet-600 hover:bg-violet-50 active:scale-95'
                                        >
                                            <FaUserPlus /> Create account
                                        </Link>
                                    </>
                                )}
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
