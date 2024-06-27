import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/app/assets";
import { navLinks } from "@/util/links";
import Button from "@/app/ui/button";
import { NavContainer, NavContainerLinks, NavLink } from "./style";
import { MenuIcon, CloseIcon } from "../assets/svg";

export const NavBar = () => {
  const [navState, setNavState] = useState(false);

  return (
    <NavContainer>
      <Link href={"/"}>
        <Logo />
      </Link>
      <NavContainerLinks $open={navState}>
        {navLinks.map((link) => {
          return (
            <NavLink key={link.id} href={link.link}>
              {link.name}
            </NavLink>
          );
        })}
        <Button>Shop Now</Button>
      </NavContainerLinks>
      <div className="menu" onClick={()=>setNavState(!navState)}>
        <Image src={navState ? CloseIcon : MenuIcon} alt="menu-icon" />
      </div>
    </NavContainer>
  );
};
