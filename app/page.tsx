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
    <div className='min-w-screen min-h-full mx-10 flex flex-col justify-evenly bg-white/10 p-10'>
      <div className='bg-black/10 mb-6  text-white '>
      <Nav />
      </div>
      <div className='bg-black/30 flex  text-white  flex-col justify-center align-center m-8'>
      <Title />
      <motion.img variants={fadeIn('up, 0.3')} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} src={bg.src} />
      </div>
      <div className='w-full w-max-screen backdrop-blur-4xl rounded-3xl p-40 flex flex-col justify-center items-center bg-white/10  min-h-[500px] m-auto mt-[22rem] '>
      <p>Sign in</p>
      <Signin />
      </div>
    </div>
    </>
  );
}
 