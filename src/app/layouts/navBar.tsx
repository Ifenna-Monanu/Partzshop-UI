import React from 'react'
import { NavContainer, NavContainerLinks, NavLink } from './style'
import { Logo } from '@/app/assets'
import { navLinks } from '@/util/links'

export const NavBar = () => {
  return (
    <NavContainer>
        <Logo />
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
        </NavContainerLinks>
    </NavContainer>
  )
}
