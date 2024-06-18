import React from 'react'
import { NavContainer, NavContainerLinks, NavLink } from './style'
import { Logo } from '@/app/assets'
import { navLinks } from '@/util/links'
import Button from '@/app/ui/button'
import menuIcon from '@/app/assets/images/menu.png'
import Image from 'next/image'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <NavContainer>
        <Link href={'/'}>
          <Logo />
        </Link>
        <NavContainerLinks>
        {
            navLinks.map((link) => {
                return (
                    <NavLink  key={link.id} href={link.link}>
                        {link.name}
                </NavLink>
                )
            })
        }
        <Button>Shop Now</Button>
        </NavContainerLinks>
        <div className='menu'>
          <Image
            src={menuIcon}
            alt='menu-icon'
          />
        </div>
    </NavContainer>
  )
}
