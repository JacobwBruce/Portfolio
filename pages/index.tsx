import Head from 'next/head';
import Cosmic from 'cosmicjs';
import { GetStaticProps } from 'next';
import Navbar from '../components/Navbar';
import { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import GlobalContext from '../utils/GlobalContext';
import Masthead from '../components/Masthead';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

const cosmic = Cosmic();

const bucket = cosmic.bucket({
    slug: process.env.NEXT_PUBLIC_BUCKET_SLUG,
    read_key: process.env.NEXT_PUBLIC_BUCKET_READ_KEY,
});

export default function Home({ projects, features }) {
    const { darkMode } = useContext(GlobalContext);

    useEffect(() => {
        alert(
            'Due to Heroku pricing changes, some of these projects no longer work'
        );
    }, []);

    return (
        <div className={`${darkMode && 'dark'}`}>
            <Head>
                <title>Jacob Bruce</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Jacob Bruce's Software Development Portfolio"
                />
                <meta
                    name="keywords"
                    content="Jacob, Bruce, Portfolio, Software Development"
                />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <Navbar />
            {/* Body */}
            <div className="dark:bg-gray-900">
                <Masthead />
                <div className=" flex flex-col items-center">
                    <About />
                </div>
                <Projects features={features} projects={projects} />
                <Contact />
            </div>

            <Footer />
        </div>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const projectData = await bucket.getObjects({
        query: {
            type: 'projects',
        },
        props: 'slug,title,content,metadata.url',
    });
    const projects = await projectData.objects;
    const featuresData = await bucket.getObjects({
        query: {
            type: 'features',
        },
        props: 'slug,title,content,metadata.url, metadata.thumbnail',
    });
    const features = await featuresData.objects;
    return {
        props: {
            projects,
            features,
        },
    };
};
