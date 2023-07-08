import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import github from '@/srcs/public/github.png'
const Footer = () => {
  return (
    <div className={styles.container}>
        <div>@2023 Made with &lt;3 for Trancendance. All rights reserved</div>
        <Image src={github} width={20} height={20} alt="" />
    </div>
  )
}

export default Footer