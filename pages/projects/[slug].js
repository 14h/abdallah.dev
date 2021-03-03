import {useRouter} from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';

import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import {get_all_projects, get_project} from '../../lib/api';

export default function Post({project}) {
    const router = useRouter();

    if (!router.isFallback && !project) {
        return <ErrorPage statusCode={404}/>
    }

    if (router.isFallback) {
        return (
            <Layout>
                <Container>
                    <Header/>
                    <div
                        className='text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-tight md:leading-none mt-20 text-center md:text-left'>Loading…
                    </div>
                </Container>
            </Layout>
        )
    }

    return (
        <Layout>
            <Container>
                <Header
                    selected='projects'
                />
                <article>
                    <Head>
                        <title>
                            {project.name}
                        </title>
                    </Head>
                    <div className="mt-48 container-l mx-auto">
                        <h1 className="text-6xl md:text-6xl lg:text-7xl md:leading-none mt-48 mb-12 text-center">
                            {project.name}
                        </h1>
                        <div className='lg:flex'>
                        </div>
                    </div>
                </article>
            </Container>
        </Layout>
    )
}

export async function getStaticProps({params}) {
    const project = await get_project(params.slug);

    return {
        props: {
            project: project ?? null,
        },
    };
}

export async function getStaticPaths() {
    const projects = await get_all_projects();

    return {
        paths: projects?.map(({slug}) => `/projects/${slug}`) ?? [],
        fallback: true,
    };
}
