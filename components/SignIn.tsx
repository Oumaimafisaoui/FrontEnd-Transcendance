'use client'

import { useFormik } from 'formik';
import React from 'react';

 const validate = values => {
   const errors = {};
 
   if (!values.firstName) {
     errors.firstName = 'Required';
   } else if (values.firstName.length > 15) {
     errors.firstName = 'Must be 15 characters or less';
   }
 
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
 
   return errors;
 };
 
const Signin = () => {
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

   return (
     <form id="signin" className=' flex w-full flex-row justify-between' onSubmit={formik.handleSubmit}>
       
       <div className=' w-1/3 flex flex-col justify-center'>
        <button className='bg-white mx-auto w-full rounded-2xl p-3 mt-10'>Log in with Intra</button>
       </div>
       <div className=' flex w-1/2 flex-col'>
       <p className="mb-4 text-2xl text-white">Sign in</p>
       <label htmlFor="firstName" className='block uppercase tracking-wide text-black text-xs font-bold mb-2 ml-0 '>First Name</label>
       <input className=' text-white appearance-none block w-full bg-gray-700/50 text-gray-700  rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700/30 '
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
       />
       {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
 
       <label htmlFor="email" className='block uppercase tracking-wide text-black text-xs font-bold mb-2 ml-0'>Email Address</label>
       <input
        className='text-white appearance-none block w-full bg-gray-700/50 text-gray-700  rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700/30 '
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.errors.email ? <div>{formik.errors.email}</div> : null}
       <button type="submit" className='bg-white mx-auto w-full rounded-2xl p-3 mt-10'>Submit</button>
        </div>
     </form>
   );
 };

 export default Signin;