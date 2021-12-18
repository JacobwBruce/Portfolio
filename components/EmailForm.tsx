import React, { FC } from 'react';

const EmailForm: FC = () => {
    return (
        <div className='flex flex-col items-center w-full pb-10'>
            <form className='w-auto md:w-[450px] lg:w-[700px] space-y-10'>
                <div className=''>
                    <input
                        className='form-input'
                        type='text'
                        placeholder='Name'
                        required
                        name='name'
                    />
                </div>
                <div className=''>
                    <input
                        className='form-input'
                        type='email'
                        placeholder='Email'
                        required
                        name='email'
                    />
                </div>
                <div className=''>
                    <textarea
                        placeholder='Message'
                        className='form-input'
                        id='message-TextArea'
                        cols={30}
                        rows={10}
                        name='message'
                    ></textarea>
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className='button'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmailForm;
