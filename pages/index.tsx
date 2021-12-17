import Head from 'next/head';
import Cosmic from 'cosmicjs';
import { GetStaticProps } from 'next';
import Navbar from '../components/Navbar';
import { useContext, useState } from 'react';
import Footer from '../components/Footer';
import GlobalContext from '../utils/GlobalContext';
import Masthead from '../components/Masthead';

const cosmic = Cosmic();

const bucket = cosmic.bucket({
    slug: process.env.NEXT_PUBLIC_BUCKET_SLUG,
    read_key: process.env.NEXT_PUBLIC_BUCKET_READ_KEY,
});

export default function Home({ projects, features }) {
    const { darkMode } = useContext(GlobalContext);

    return (
        <div className={`${darkMode && 'dark'}`}>
            <Head>
                <title>Jacob Bruce</title>
                <link rel='icon' href='/favicon.ico' />
                <meta name='description' content="Jacob Bruce's Software Development Portfolio" />
                <meta name='keywords' content='Jacob, Bruce, Portfolio, Software Development' />
                <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
            </Head>
            <Navbar />
            {/* Body */}
            <div className='dark:bg-gray-900'>
                <Masthead />
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
        props: 'slug,title,content,url',
    });
    const projects = await projectData.objects;
    const featuresData = await bucket.getObjects({
        query: {
            type: 'features',
        },
        props: 'slug,title,content,url,thumbnail',
    });
    const features = await featuresData.objects;
    return {
        props: {
            projects,
            features,
        },
    };
};
