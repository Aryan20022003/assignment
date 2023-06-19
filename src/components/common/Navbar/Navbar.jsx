import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "./../../../assets/images/logo.svg"
import Navigator from './Navigator';
import SignIn from './LoginTry';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md py-2">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="flex items-center h-16 justify-between">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="w-1/2 md:h-3/5 md:w-5/6" />
                    </div>
                    <div className="hidden md:flex">
                        <Navigator />
                    </div>
                    <div className='hidden md:flex'>
                        <SignIn />
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <FiX className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <FiMenu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, toggle className based on menu state */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className='mt-8 flex flex-col gap-4 h-screen text-left px-6'>
                    <Navigator />
                    <div className='mx-12 flex flex-col-reverse text-center mt-9'>
                        <SignIn />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
