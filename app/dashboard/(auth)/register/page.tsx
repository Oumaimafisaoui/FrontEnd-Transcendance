import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';

export const Register = () => {
  return (
    <div className={styles.container}>
        <form className={styles.form}>
        <
          h1>Sign Up</h1>
          <input type="text" placeholder="Username" className={styles.input} required/>
          <input type="email" placeholder="Email" className={styles.input} required/>
          <input type="password" placeholder="Password" className={styles.input} required/>
          <button className={styles.button}>Register</button>

        </form>
        <Link href="dashboard/login">Login with an existing account</Link>
    </div>
  )
}

export default Register;