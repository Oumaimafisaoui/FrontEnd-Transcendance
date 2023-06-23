'use client'
import Nav from '../components/Navbar';
import Title from '../components/Title';
import bg from '../public/background.png';
import { motion } from "framer-motion";
import fadeIn from '../app/variants';
import Signin from '../components/SignIn';
export default function Home() {
  return (
    <div className='min-w-screen h-full mx-10 text-white flex flex-col flex-evenly  bg-white/10'>  
      <Nav />
      <Title />
      <motion.img  variants={fadeIn('up, 0.3')} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} src={bg.src} />
      <Signin />
    </div>
  );
}
