"use client";

import Image from 'next/image'
import styles from './page.module.css'
// import Spline from '@splinetool/react-spline';
import bg from '@/srcs/public/bg.png';
import { TypeAnimation } from 'react-type-animation';
import button from '@/srcs/components/Button/button'
import Button from '../srcs/components/Button/button';

export default function Home() {
  return (
    <div className={styles.container} id="home">
      <div className={styles.item1}>
      <TypeAnimation
      sequence={[
        'Welcome to the online Pong Game!',
        1000,
        'Chat and play with friends online!', 1000,
      ]}
      className={styles.title}
      wrapper="div"
      speed={50}
      repeat={Infinity}
    />
      <p className={styles.desc}>
        Join us now and dive into the fun of Pong Game!
      </p>
      <Button url="signin" text="Start Playing!"/>
      </div>
      <div className={styles.item2}>
      <Image alt="" src={bg} className={styles.img} />
      </div>
    </div>
  )
}
