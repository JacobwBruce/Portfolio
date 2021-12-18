import React, { FC } from 'react';

const About: FC = () => {
    return (
        <div className='container my-5 dark:text-white '>
            <h2 data-aos='fade-up' className='section-heading'>
                About
            </h2>
            <div data-aos='fade-up' className='text-center text-lg'>
                <p>
                    I am a graduate of the Software Development and Network Engineering program at
                    Sheridan College, with a high overall GPA.
                </p>

                <p>
                    I recently worked as a <strong>Java Learning Assistant</strong> with Sheridan
                    College, where I got the oppurtunity to teach and aid students in their
                    programming courses, predominately in <strong>Java</strong> and{' '}
                    <strong>Spring Boot</strong>. Through coaching and collaboration with students
                    and college faculty I supported the development of an improved online learning
                    experience.
                </p>

                <p>
                    I also enjoying breaking things in <strong>TypeScript, Java, Python,</strong>{' '}
                    and <strong>C#</strong>, and do most of my projects with <strong>React</strong>{' '}
                    or <strong>Next.js</strong> (including this one).
                </p>
            </div>
        </div>
    );
};

export default About;
