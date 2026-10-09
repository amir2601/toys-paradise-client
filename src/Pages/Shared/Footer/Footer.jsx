import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../../assets/logo1.png'

const Footer = () => {
    const linkGroups = [
        {
            title: 'Services',
            links: ['Branding', 'Design', 'Marketing', 'Advertisement'],
        },
        {
            title: 'Company',
            links: ['About us', 'Contact', 'Jobs', 'Press kit'],
        },
        {
            title: 'Legal',
            links: ['Terms of use', 'Privacy policy', 'Cookie policy'],
        },
    ];

    const socials = [
        { icon: <FaFacebookF />, href: 'https://www.facebook.com/riad.vai.2601' },
        { icon: <FaInstagram />, href: 'https://www.instagram.com/amir_hossin_.riad/' },
        { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/amir-hossin-riad/' },
    ];

    return (
        <footer className="mt-16 border-t border-base-300 bg-neutral text-neutral-content">
            <div className="container-x py-14">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="" className='h-12 w-auto' />
                            <span className="font-display text-2xl font-bold text-white">Toys Paradise</span>
                        </div>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
                            Unleash your inner child. Discover premium toy cars, timeless classics and
                            playful favourites for every age.
                        </p>
                        <div className="mt-6 flex gap-3">
                            {
                                socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target='_blank'
                                        rel="noreferrer"
                                        className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-neutral-content transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                                    >
                                        {social.icon}
                                    </a>
                                ))
                            }
                        </div>
                    </div>

                    {
                        linkGroups.map((group, index) => (
                            <div key={index}>
                                <h6 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
                                    {group.title}
                                </h6>
                                <ul className="space-y-2.5 text-sm">
                                    {
                                        group.links.map((link, i) => (
                                            <li key={i}>
                                                <a className="inline-block text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-white">
                                                    {link}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-400 sm:flex-row">
                    <p>© Copyright 2023-2025 TOY PARADISE. All Rights Reserved.</p>
                    <p>Made with ❤ for little adventurers.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
