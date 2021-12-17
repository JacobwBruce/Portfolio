import React, { FC } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Feature, Project } from '../types';

interface Props {
    features: Array<Feature>;
    projects: Array<Project>;
}

const Projects: FC<Props> = ({ projects, features }) => {
    return (
        <div className='container py-5 justify-center dark:text-white'>
            <h2 data-aos='fade-up' className=' text-center text-4xl'>
                Projects
            </h2>

            {/* featured projects here */}

            <div>
                <div className='flex flex-wrap justify-center'>
                    <h4 data-aos='fade-right' className='text-center'>
                        Other Projects
                    </h4>
                </div>
                {projects.map((project, index) => (
                    <div
                        className='grid grid-cols-1 md:grid-cols-2 mb-4 gap-x-10'
                        key={`project-${index}`}
                    >
                        <h5
                            data-aos='fade-right'
                            className='justify-self-start md:justify-self-end'
                        >
                            {project.title}
                        </h5>
                        <div data-aos='fade-left' className=''>
                            <div dangerouslySetInnerHTML={{ __html: project.content }} />

                            <a className='' href={project.metadata.url} target='__blank'>
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
