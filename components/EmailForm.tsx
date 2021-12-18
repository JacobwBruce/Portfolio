import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

const EmailForm: FC = () => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async ({ name, email, message }) => {
        setLoading(true);
        const data = await fetch('/api/sendEmail', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        });
        setLoading(false);

        const response = await data.json();
        console.log(response);
        // do somethign with error:boolean
    };

    return (
        <div className='flex flex-col items-center w-full pb-10'>
            <form
                className='w-auto md:w-[450px] lg:w-[700px] space-y-10'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className=''>
                    <input
                        className='form-input'
                        type='text'
                        placeholder='Name'
                        required
                        {...register('name')}
                    />
                </div>
                <div className=''>
                    <input
                        className='form-input'
                        type='email'
                        placeholder='Email'
                        required
                        {...register('email')}
                    />
                </div>
                <div className=''>
                    <textarea
                        placeholder='Message'
                        className='form-input'
                        id='message-TextArea'
                        cols={30}
                        rows={10}
                        {...register('message')}
                    ></textarea>
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className='button' disabled={loading}>
                        {loading ? 'Loading...' : 'Send'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmailForm;
