import React from 'react';
import { FaFacebookF,FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../../assets/logo1.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-accent text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-accent text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img src={logo} alt="" />
                    <p>TOY PARADISE <br />© Copyright 2023-2025 All Rights Reserved.</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-xl">
                        <a href="https://www.facebook.com/riad.vai.2601" target='_blank'><FaFacebookF></FaFacebookF></a>
                        <a href="https://www.instagram.com/amir_hossin_.riad/" target='_blank'><FaInstagram></FaInstagram></a>
                        <a href="https://www.linkedin.com/in/amir-hossin-riad/" target='_blank'><FaLinkedinIn></FaLinkedinIn></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;