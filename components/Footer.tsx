import React, { FC, useContext } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import GlobalContext from '../utils/GlobalContext';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

const Footer: FC = () => {
    const { setDarkMode } = useContext(GlobalContext);

    return (
        <footer className='relative pb-6 border-t-2 border-gray-200 dark:bg-gray-900 dark:text-white dark:border-gray-700'>
            <div className='grid grid-cols-1 sm:grid-cols-3 space-y-4 justify-items-center items-end'>
                <div>
                    <small className='pre-wrap'>Copyright © jacobbruce.ca 2021</small>
                </div>
                <div className='flex'>
                    <a
                        className='social-media-link mx-1'
                        href='https://github.com/JacobwBruce'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <AiFillGithub size={24} />
                    </a>
                    <a
                        className='social-media-link mx-1'
                        href='https://www.linkedin.com/in/jacob-bruce'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <AiFillLinkedin size={24} />
                    </a>
                </div>
                <div>
                    <Dropdown text='Theme'>
                        <DropdownItem onClick={() => setDarkMode(true)}>Dark</DropdownItem>
                        <DropdownItem onClick={() => setDarkMode(false)}>Light</DropdownItem>
                    </Dropdown>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
