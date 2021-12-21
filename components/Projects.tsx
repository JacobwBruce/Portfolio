import React, { FC } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Feature, Project } from '../types';
import Image from 'next/image';

interface Props {
    features: Array<Feature>;
    projects: Array<Project>;
}

const Projects: FC<Props> = ({ projects, features }) => {
    return (
        <div id='Projects' className='container py-5 dark:text-white'>
            <h2 data-aos='fade-up' className='section-heading w-screen'>
                Projects
            </h2>

            <div className=''>
                <h4 data-aos='fade-right' className='text-center text-2xl my-10 font-bold w-screen'>
                    Featured Projects
                </h4>
                <div className='flex flex-wrap items-center flex-col'>
                    {features.map((feature, index) => (
                        <div
                            key={`feature-${index}`}
                            className='grid grid-cols-1 md:grid-cols-2 gap-x-10 mb-20 items-center px-5'
                        >
                            <img
                                className='w-full md:w-9/12 justify-self-start md:justify-self-end'
                                src={feature.metadata.thumbnail.url}
                                alt={`${feature.title}-thumbnail`}
                            />
                            <div>
                                <h4 className='text-xl font-semibold py-5 md:py-0'>{feature.title}</h4>
                                <div dangerouslySetInnerHTML={{ __html: feature.content }} />
                                <a
                                    className='text-blue-500'
                                    href={feature.metadata.url}
                                    target='__blank'
                                >
                                    <FiExternalLink size={24} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h4 data-aos='fade-right' className='text-center text-2xl mb-4 font-bold w-screen'>
                    Other Projects
                </h4>
                {projects.map((project, index) => (
                    <div
                        className='grid grid-cols-1 md:grid-cols-2 mb-4 gap-x-10 px-5'
                        key={`project-${index}`}
                    >
                        <h5
                            data-aos='fade-right'
                            className='justify-self-start md:justify-self-end font-bold md:font-normal py-4 md:py-0'
                        >
                            {project.title}
                        </h5>
                        <div data-aos='fade-right' className=''>
                            <div dangerouslySetInnerHTML={{ __html: project.content }} />

                            <a
                                className='text-blue-500 pt-4 md:pt-0'
                                href={project.metadata.url}
                                target='__blank'
                            >
                                <FiExternalLink size={20} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
