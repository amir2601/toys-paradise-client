import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import logo from '../../../assets/logo1.png';

const Footer = () => {
    const linkGroups = [
        {
            title: 'Services',
            links: [
                { label: 'Branding', to: '/allToys' },
                { label: 'Design', to: '/allToys' },
                { label: 'Marketing', to: '/blog' },
                { label: 'Advertisement', to: '/blog' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About us', to: '/blog' },
                { label: 'Contact', to: '/blog' },
                { label: 'Jobs', to: '/blog' },
                { label: 'Press kit', to: '/blog' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { label: 'Terms of use', to: '/blog' },
                { label: 'Privacy policy', to: '/blog' },
                { label: 'Cookie policy', to: '/blog' },
            ],
        },
    ];

    const socials = [
        { icon: <FaFacebookF />, href: 'https://www.facebook.com/riad.vai.2601', label: 'Facebook' },
        { icon: <FaInstagram />, href: 'https://www.instagram.com/amir_hossin_.riad/', label: 'Instagram' },
        { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/amir-hossin-riad/', label: 'LinkedIn' },
    ];

    const year = new Date().getFullYear();

    return (
        <footer className='mt-16 overflow-hidden bg-neutral text-neutral-content'>
            <div className='container-x py-14'>
                <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-6'>
                    <div className='lg:col-span-2'>
                        <Link to='/' className='pressable flex w-fit items-center gap-3 transition-transform duration-300 hover:scale-105'>
                            <img src={logo} alt='' className='h-12 w-auto' />
                            <span className='font-display text-2xl font-bold text-white'>Toys Paradise</span>
                        </Link>
                        <p className='mt-4 max-w-sm text-sm leading-relaxed text-slate-400'>
                            Unleash your inner child. Discover premium toy cars, timeless classics and
                            playful favourites for every age — delivered with love.
                        </p>

                        <div className='mt-6 space-y-2.5 text-sm text-slate-400'>
                            <p className='flex items-center gap-3'>
                                <FaMapMarkerAlt className='text-violet-400' />
                                Dhaka, Bangladesh
                            </p>
                            <p className='flex items-center gap-3'>
                                <FaEnvelope className='text-violet-400' />
                                hello@toysparadise.com
                            </p>
                            <p className='flex items-center gap-3'>
                                <FaPhoneAlt className='text-violet-400' />
                                +880 1234 567 890
                            </p>
                        </div>

                        <div className='mt-6 flex gap-3'>
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label={social.label}
                                    className='group grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-neutral-content transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:bg-gradient-to-br hover:from-violet-600 hover:to-fuchsia-500 hover:text-white hover:shadow-glow'
                                >
                                    <span className='transition-transform duration-300 group-hover:scale-110'>{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {linkGroups.map((group) => (
                        <div key={group.title}>
                            <h6 className='mb-4 text-sm font-bold uppercase tracking-widest text-white'>
                                {group.title}
                            </h6>
                            <ul className='space-y-2.5 text-sm'>
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.to}
                                            className='group inline-flex items-center gap-2 text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-white'
                                        >
                                            <span className='h-px w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-all duration-300 group-hover:w-3'></span>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className='border-t border-white/10'>
                <div className='container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-slate-400 sm:flex-row'>
                    <p>© Copyright 2023-{year} Toys Paradise. All Rights Reserved.</p>
                    <p className='flex items-center gap-1.5'>
                        Made with <span className='animate-pulse text-rose-400'>♥</span> for little adventurers.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;