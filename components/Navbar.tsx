import React, { FC, useState } from 'react';
import NavbarItem from './NavbarItem';

const Navbar: FC = () => {
    const [hidden, setHidden] = useState<boolean>(true);
    const [lineClasses, setLineClasses] = useState<string>('');
    const [line2Classes, setLine2Classes] = useState<string>('mt-1.5');

    const onClickHandler = () => {
        if (hidden) {
            setHidden(false);
            setLineClasses('rotate-45 absolute');
            setLine2Classes('-rotate-45 absolute');
        } else {
            setHidden(true);
            setLineClasses('');
            setLine2Classes('mt-1.5');
        }
    };

    return (
        <header
            className='w-full h-16 bg-white shadow-md transition lg:h-20 
        dark:bg-gray-900 dark:text-white dark:shadow-none dark:border-b-2 dark:border-gray-700'
        >
            <nav className='container m-auto py-3 lg:px-20 lg:py-4'>
                <div className='relative flex flex-wrap items-center justify-between'>
                    <div className='relative z-10 w-full px-6 flex items-center justify-between lg:w-auto'>
                        {/* <a href="">
                        <img src="public/images/logo.svg" className="w-32" alt="tailus logo">
                    </a> */}
                        <span className='text-lg'>Jacob Bruce</span>

                        <button
                            id='hamburger'
                            className='relative w-10 h-10 lg:hidden'
                            onClick={onClickHandler}
                        >
                            <div
                                role='hidden'
                                id='line'
                                className={`inset-0 w-6 h-0.5 m-auto rounded-full bg-gray-500 transition duration-300 
                                ${lineClasses}`}
                            ></div>
                            <div
                                role='hidden'
                                id='line2'
                                className={`inset-0 w-6 h-0.5 m-auto rounded-full bg-gray-500 transition duration-300 ${line2Classes}`}
                            ></div>
                        </button>
                    </div>

                    <div
                        id='navlinks'
                        className={`${
                            hidden && 'hidden'
                        } w-full px-6 bg-white transition lg:block lg:w-auto lg:px-0 lg:bg-transparent shadow-md lg:shadow-none
                        dark:bg-gray-900 `}
                    >
                        <ul className='py-4 text-gray-600 text-lg tracking-wide lg:flex lg:space-x-8 lg:py-0'>
                            <NavbarItem uri='#About'>About</NavbarItem>
                            <NavbarItem uri='#Projects'>Projects</NavbarItem>
                            <li className='mt-4 lg:mt-0'>
                                <a href='#Contact' className='button w-full'>
                                    <span className='block text-center text-white font-semibold lg:text-base'>
                                        Contact me
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
