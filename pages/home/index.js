import React from "react";

import Head from 'next/head';

import Container from '../../components/container';
import Layout from '../../components/layout';
import Header from "../../components/header";

export default function Home() {
    return (
        <>
            <Layout>
                <Head />
                <Container className="overflow-y-scroll max-h-screen">
                    <Header selected="home"/>
                    <h1 className="text-6xl md:text-6xl lg:text-7xl md:leading-none mt-48 mb-12 text-center">
                        WORK
                    </h1>
                </Container>
            </Layout>
        </>
    )
}
