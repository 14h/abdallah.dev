import Link from 'next/link'
import {motion} from "framer-motion";

export default function Header({selected}) {


    return (
        <motion.div
            layoutId='bg-black'
            className='bg-black text-white fixed top-0 left-0 right-0 z-50  pt-2'
        >
            <div
                className="container-l mx-auto lg:flex flex-row justify-between items-center"
            >
                <Link href="/">
                    <div className='flex flex-row justify-center items-center m-4 lg:ml-16'>
                        <a className="hover:underline text-center">
                            <motion.h1
                                className='text-2xl lg:text-3xl text-center text-white'
                                layoutId='abdallah-kawji'
                            >
                                ABDALLAH KAWJI
                            </motion.h1>
                        </a>
                    </div>
                </Link>

                <motion.div
                    className='flex flex-row justify-center items-center lg:mr-20 mb-4 lg:mb-0'
                    layoutId='navigation'
                >
                    <Link href='/projects'>
                        <div className={`p-4 cursor-pointer border-b-2 border-solid ${selected === 'home' ? 'border-gray-400' : 'border-transparent'} hover:border-gray-300`}>
                            HOME
                        </div>
                    </Link>
                    <Link href='/about'>
                        <div className={`p-4 cursor-pointer border-b-2 border-solid ${selected === 'about' ? 'border-gray-400' : 'border-transparent'} hover:border-gray-300`}>
                            ABOUT
                        </div>
                    </Link>
                </motion.div>

            </div>
        </motion.div>
    )
}
