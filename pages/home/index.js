import React from "react";

import Head from "next/head";

import Container from "../../components/container";
import Layout from "../../components/layout";
import Header from "../../components/header";

export default function Home() {
    return (
        <>
            <Layout>
                <Head />
                <Container className="overflow-y-scroll max-h-screen">
                    <Header selected="home"/>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl md:leading-none mt-48 mb-12 text-center">
                        Hello fellow human, Nice to have you here!
                    </h2>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl md:leading-none mt-48 mb-12 text-center">
                        Website is still under construction, expect to see something awesome in the next couple of days!
                    </h2>
                </Container>
            </Layout>
        </>
    )
}
