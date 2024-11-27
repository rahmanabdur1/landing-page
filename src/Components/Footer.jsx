import React from 'react';
import footer from '../assets/images/footer.png';

const Footer = () => {
    return (
        <footer
            style={{
                backgroundImage: `url(${footer})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
            }}
            className="p-10 font-sans text-white"
            role="contentinfo"
            aria-label="Footer Section"
        >
            {/* Overlay to improve contrast */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay to enhance text visibility
                    zIndex: -1,
                }}
            ></div>

            <div className="footer flex flex-col lg:flex-row justify-around gap-10">
                {/* Services Section */}
                <section aria-labelledby="services" className="footer-section">
                    <h2 id="services" className="footer-title text-xl font-semibold md:text-2xl lg:text-3xl">Services</h2>
                    <ul role="list">
                        <li>
                            <a
                                href="/branding"
                                className="block mt-2 text-sm font-normal hover:bg-black hover:text-white py-1 px-2 rounded transition-all duration-300"
                                aria-label="Branding service"
                            >
                                Branding
                            </a>
                        </li>
                        <li>
                            <a
                                href="/design"
                                className="block mt-2 text-sm font-normal hover:bg-black hover:text-white py-1 px-2 rounded transition-all duration-300"
                                aria-label="Design service"
                            >
                                Design
                            </a>
                        </li>
                        <li>
                            <a
                                href="/marketing"
                                className="block mt-2 text-sm font-normal hover:bg-black hover:text-white py-1 px-2 rounded transition-all duration-300"
                                aria-label="Marketing service"
                            >
                                Marketing
                            </a>
                        </li>
                        <li>
                            <a
                                href="/advertisement"
                                className="block mt-2 text-sm font-normal hover:bg-black hover:text-white py-1 px-2 rounded transition-all duration-300"
                                aria-label="Advertisement service"
                            >
                                Advertisement
                            </a>
                        </li>
                    </ul>
                </section>

                {/* Company Section */}
                <section aria-labelledby="company" className="footer-section">
                    <h2 id="company" className="footer-title text-xl font-semibold md:text-2xl lg:text-3xl">Company</h2>
                    <ul role="list">
                        <li>
                            <a
                                href="/about"
                                className="block mt-2 text-sm font-normal hover:bg-black hover:text-white py-1 px-2 rounded transition-all duration-300"
                                aria-label="About us"
                            >
                                About us
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="block mt-2 text-sm font-normal hover:bg-black hover:text-white py-1 px-2 rounded transition-all duration-300"
                                aria-label="Contact us"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="/jobs"
                                className="block mt-2 text-sm font-normal hover:bg-black hover:text-white py-1 px-2 rounded transition-all duration-300"
                                aria-label="View job listings"
                            >
                                Jobs
                            </a>
                        </li>
                        <li>
                            <a
                                href="/press-kit"
                                className="block mt-2 text-sm font-normal hover:bg-black hover:text-white py-1 px-2 rounded transition-all duration-300"
                                aria-label="Press kit"
                            >
                                Press kit
                            </a>
                        </li>
                    </ul>
                </section>

                {/* Legal Section */}
                <section aria-labelledby="legal" className="footer-section">
                    <h2 id="legal" className="footer-title text-xl font-semibold md:text-2xl lg:text-3xl">Legal</h2>
                    <ul role="list">
                        <li>
                            <a
                                href="/terms"
                                className="block mt-2 text-sm font-normal hover:bg-black hover:text-white py-1 px-2 rounded transition-all duration-300"
                                aria-label="Terms of use"
                            >
                                Terms of use
                            </a>
                        </li>
                        <li>
                            <a
                                href="/privacy-policy"
                                className="block mt-2 text-sm font-normal hover:bg-black hover:text-white py-1 px-2 rounded transition-all duration-300"
                                aria-label="Privacy policy"
                            >
                                Privacy policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="/cookie-policy"
                                className="block mt-2 text-sm font-normal hover:bg-black hover:text-white py-1 px-2 rounded transition-all duration-300"
                                aria-label="Cookie policy"
                            >
                                Cookie policy
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            {/* Copyright Section */}
            <div>
                <p className="text-center mt-20 text-sm font-light md:text-base lg:text-lg">
                    Copyright © 2023 - All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
