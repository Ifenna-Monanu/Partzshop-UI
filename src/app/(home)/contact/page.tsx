'use client'

import React from 'react'
import { ContactForm, ContactWraper } from './style'
import Input from '@/app/ui/input/input'
import TextArea from '@/app/ui/input/textArea'
import Button from '@/app/ui/button'
import { useForm } from 'react-hook-form'
import { contactSchema } from './components/schema'
import { yupResolver } from "@hookform/resolvers/yup";


const ContactPage = () => {
  
  interface IContact {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    message: string
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema)
  })


  const submitHandler = (data:any) => {
    console.log(data, "data")
  }

  console.log(errors, "eee")

  return (
    <ContactWraper>
        <div className="wrapper">
        <div className='contact-head'>
          <span>Contact Us</span>
        </div>

        <div className='contact-title'>
          <h1>Get in touch</h1>
          <span>We love to hear from you. Please fill out this form.</span>
        </div>

        <ContactForm className='form' onSubmit={handleSubmit(submitHandler)}>
          <div className='flex-input'>
            <Input err={errors['firstname']?.message}  label='First Name' type='text' placeholder='First name' {...register('firstname')}/>
            <Input err={errors['lastname']?.message} {...register('lastname')} label='Last Name' type='text' placeholder='Last name' />
          </div>
            <Input err={errors['email']?.message} {...register('email')} name='email' label='Email' type='email' placeholder='you@company.com'/>
            <Input err={errors['phone']?.message} {...register('phone')} label='Phone Number' type='text' />
            <TextArea err={errors['message']?.message} {...register('message')} label='Message' />
        <br />
        <Button variant='full'>Send Message</Button>

        </ContactForm>
        </div>
    </ContactWraper>
  )
}

export default ContactPage