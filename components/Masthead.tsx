import React, { FC } from 'react';

const Masthead: FC = () => {
    return (
        <div className='flex flex-wrap md:flex-nowrap'>
            <div className='flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36'>
                <h1 className='font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left dark:text-white'>
                    Building
                    <br /> beautiful web experiences.
                </h1>
                <div className='w-full flex justify-center md:justify-start'>
                    <button className='button mt-4'>View My Work</button>
                </div>
            </div>
            {/* <img
                src=''
                alt='Man'
                className='w-3/4 mt-12 md:absolute -mt-6 md:mt-0 right-0 -z-1'
            ></img> */}
        </div>
    );
};

export default Masthead;
