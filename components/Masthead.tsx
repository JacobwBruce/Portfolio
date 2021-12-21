import React, { FC } from 'react';
import me from '../public/me.svg';
import Image from 'next/image';

const Masthead: FC = () => {
    return (
        <div className='flex flex-wrap md:flex-nowrap justify-center pt-5 px-0 md:px-5 md:pt-0'>
            <div className='flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36'>
                <h1 className='font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left dark:text-white'>
                    Fullstack
                    <br /> Software Developer.
                </h1>
                <div className='w-full flex justify-center md:justify-start'>
                    <a href='#Projects' className='button mt-4'>
                        View My Work
                    </a>
                </div>
            </div>
            <Image src={me} alt='me' height={500} width={500} />
        </div>
    );
};

export default Masthead;
