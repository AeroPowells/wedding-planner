import React, { useState } from 'react';

interface NavbarProps {} 

const Navbar: React.FC<NavbarProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="fixed top-0 w-full bg-gray-800 z-10"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center"> 
                        <div className="flex-shrink-0">
                            <h1>Felicity and Lilac</h1> 
                        </div>
                    </div>

                    {/* Hamburger Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button 
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <svg /* Add your hamburger icon SVG here */ >...</svg>
                        </button>
                    </div>

                    {/* Nav Menu */}
                    <div className={`md:block ${isMenuOpen ? 'block' : 'hidden'} md:absolute md:inset-y-0 md:right-0 md:bg-white md:p-4`}> 
                        <div className="ml-4 flex items-center md:ml-6">
                            <ul className="nav-links">
                                <li><a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a></li>
                                {/* Add more links ... */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
