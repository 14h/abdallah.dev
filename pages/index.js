import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Index() {
    return (
        <div className='overflow-y-hidden'>
            <Layout>
                <Head/>
                <Container>
                    <motion.div
                        className='h-screen flex flex-col items-center justify-center py-16 bg-black'
                        layoutId='bg-black'
                    >
                        <div className='flex flex-col items-center justify-center'>
                            <motion.h1
                                className='text-6xl lg:text-8xl text-center text-white'
                                layoutId='abdallah-kawji'
                            >
                                ABDALLAH KAWJI
                            </motion.h1>
                        </div>
                        <motion.div
                            className='flex flex-row justify-center items-center'
                            layoutId='navigation'
                        >
                            <Link href='/projects'>
                                <div className={`text-white p-4 cursor-pointer border-b-2 border-solid border-transparent hover:border-gray-300`}>
                                    WORK
                                </div>
                            </Link>
                            <Link href='/about'>
                                <div className={`text-white p-4 cursor-pointer border-b-2 border-solid border-transparent hover:border-gray-300 `}>
                                    ABOUT
                                </div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </Container>
            </Layout>
        </div>
    )
}
