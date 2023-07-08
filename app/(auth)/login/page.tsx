import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';

export const Login = () => {
  return (
    <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.infos}>
          <h1 className={styles.title}>Log In</h1>
          <input type="email" placeholder="Email" className={styles.input} required/>
          <input type="password" placeholder="Password" className={styles.input} required/> 
          <button className={styles.button}>Login</button>
          </div>
          <div>Or</div>
          <div className={styles.auth}>
          <button className={styles.button}>Login with Intra</button>
          <button className={styles.button}>Login with Google</button>
          </div>
        </form>
    </div>
  )
}

export default Login;