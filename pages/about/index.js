import Container from '../../components/container'
import Layout from '../../components/layout'
import Head from 'next/head'
import Header from "../../components/header";

export default function About() {
    return (
        <>
            <Layout>
                <Head/>
                <Container>
                    <Header selected='about'/>
                </Container>
            </Layout>
        </>
    )
}
