import React from 'react'
import { FooterContainer } from './style'
import { Logo } from '@/app/assets'
import Link from 'next/link'
import Button from '@/app/ui/button'

const footerLinksOne = [
  {
    name: 'About',
    href: "#"
  },

  {
    name: 'Features',
    href: "#"
  },
  {
    name: 'Work',
    href: "#"
  },
  {
    name: 'Career',
    href: "#"
  },
]

const footerLinksTwo = [
  {
    name: 'Customer Support',
    href: "#"
  },
  {
    name: 'Delivery Details',
    href: "#"
  },
  {
    name: 'Terms & Conditions',
    href: "#"
  },
  {
    name: 'Privacy Policy',
    href: "#"
  },
]

export const Footer = () => {
  return (
    <FooterContainer>
      <div className='flex-display'>
      <div className='logo-wrap'>
        <Logo />
        <span>We are authentic, affordable and trustworthy.</span>
      </div>
      <div className='link-wrap'>
        <span>Company</span>
        <ul>
            {
              footerLinksOne.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))
            }
        </ul>
      </div>
      <div className='link-wrap'>
        <span>Help</span>
        <ul>
            {
              footerLinksTwo.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))
            }
        </ul>
      </div>
      <div className='news-wrap'>
        <span>news letter</span>
        <div className='subscribe'>
          <input placeholder='Enter your email address' type="text" />
          <button>Subscribe Now</button>
        </div>
      </div>
      </div>

      <div className='footer-line'>
        <span>© Copyright 2024, All Rights Reserved by PartzShop</span>
      </div>
    </FooterContainer>
  )
}


