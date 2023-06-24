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
 
   if (!values.lastName) {
     errors.lastName = 'Required';
   } else if (values.lastName.length > 20) {
     errors.lastName = 'Must be 20 characters or less';
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
     <form id="signin" className=' flex flex-col justify-center' onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName" className='block uppercase tracking-wide text-black text-xs font-bold mb-2 ml-0'>First Name</label>
       <input className='appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white '
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
       />
       {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
 
       <label htmlFor="lastName" className='block uppercase tracking-wide text-black text-xs font-bold mb-2 ml-0'>Last Name</label>
       <input className='appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastName}
       />
       {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
 
       <label htmlFor="email" className='block uppercase tracking-wide text-black text-xs font-bold mb-2 ml-0'>Email Address</label>
       <input
        className='appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.errors.email ? <div>{formik.errors.email}</div> : null}
 
       <button type="submit" className='bg-white rounded-md p-3'>Submit</button>
     </form>
   );
 };

 export default Signin;