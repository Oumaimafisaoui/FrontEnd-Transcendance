'use client'
import Nav from '../components/Navbar';
import Title from '../components/Title';
import bg from '../public/background.png';
import { motion } from "framer-motion";
import fadeIn from '../app/variants';
import Signin from '../components/SignIn';
export default function Home() {
  return (
    <>
    <div className='min-w-screen min-h-full w-full flex flex-col items-center justify-evenly bg-white/10 p-10 '>
      <div className='bg-black/10 mb-6  w-full text-white '>
      <Nav />
      </div>
      <div className=' bg-black/30 flex max-w-full text-white  flex-col justify-center align-center m-8'>
      <Title />
      <motion.img variants={fadeIn('up, 0.3')} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} src={bg.src} />
      </div>
      <div className='lg:max-w-4xl lg:my-[400px] sm:my-[200px] w-full backdrop-blur-4xl rounded-3xl px-10 py-20 flex flex-col justify-center items-center bg-white/10 shadow-inner'>

      <Signin />
      </div>
    </div>
    </>
  );
}
 