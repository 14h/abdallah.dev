import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import {motion} from "framer-motion";
import {Canvas} from "../components/canvas";

export default function Index() {
    return (
        <div className='overflow-y-hidden'>
            <Layout>
                <Head/>
                <Container>
                    <motion.div
                        className='h-screen relative'
                        layoutId='bg-black'
                    >
                        <Canvas
                            className='m-auto w-screen absolute top-0 left-0 right-0'
                        />
                        <div
                            className='flex flex-col items-center justify-center py-16 absolute top-0 left-0 right-0 bottom-0'>
                            <div className='flex flex-col items-center justify-center'>
                                <motion.h1
                                    className='text-6xl lg:text-8xl text-center text-white'
                                    layoutId='abdallah-kawji'
                                    style={{
                                        WebkitTextStroke: '6px #000'
                                    }}
                                >
                                    ABDALLAH KAWJI
                                </motion.h1>
                            </div>
                            <motion.div
                                className='flex flex-row justify-center items-center'
                                layoutId='navigation'
                                style={{
                                    WebkitTextStroke: '3px #000'
                                }}
                            >
                                <Link href='/home'>
                                    <div
                                        className='text-2xl lg:text-5xl text-white p-4 cursor-pointer border-b-2 border-solid border-transparent hover:border-gray-300'>
                                        HOME
                                    </div>
                                </Link>
                                <Link href='/about'>
                                    <div
                                        className='text-2xl lg:text-5xl text-white p-4 cursor-pointer border-b-2 border-solid border-transparent hover:border-gray-300'>
                                        ABOUT
                                    </div>
                                </Link>
                            </motion.div>
                        </div>

                    </motion.div>
                </Container>
            </Layout>
        </div>
    )
}
