import { motion } from "framer-motion";

import  fadeIn  from "../app/variants";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const Title = () => {
    return (
        <div className='mt-10 h-[300px]  mx-50 flex flex-col items-center justify-center'>
        <motion.p className='text-5xl' variants={fadeIn('up, 0.3')} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}}>
          Welcome to PONG Game
        </motion.p>
        <p className='text-purple-700 text-3xl mt-8 mb-10 ' >
          <TypeAnimation sequence={[
              ' Let the fun begin', 2000, ' Play Pong With your friends', 2000, 'Chat with your friends', 2000, ' All in one Game', 2000
            ]}
            speed={60}
            repeat={Infinity}
            />
        </p>
        <Link  
          activeClass="active"
          offset={-110}
          spy={true}
          smooth={true}
          to="signin" 
          className='bg-purple-700 text-white px-10 py-2 mt-10 rounded-full cursor-pointer'
         >
          Play Now
      </Link>
    </div>
    )

}

export default Title;