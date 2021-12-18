import React, { FC } from 'react';
import EmailForm from './EmailForm';

const Contact: FC = () => {
    return (
        <div
            data-aos='flip-right'
            className='dark:text-white text-center pb-5 w-screen'
            id='Contact'
        >
            <h2 className='section-heading'>Contact</h2>

            <div className='mb-5'>
                <h4>
                    Phone: <span className='text-blue-500'>289-839-2377</span>
                </h4>
                <h4>
                    Email: <span className='text-blue-500'>jacobwbruce@hotmail.com</span>
                </h4>
            </div>
            <EmailForm />
        </div>
    );
};

export default Contact;
