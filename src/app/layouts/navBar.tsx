import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/app/assets";
import { navLinks } from "@/util/links";
import Button from "@/app/ui/button";
import { NavContainer, NavContainerLinks, NavLink } from "./style";
import { MenuIcon, CloseIcon, WhatsappIcon } from "../assets/svg";
import Modal from "../ui/modal";
import WhatsappConfig from "@/util/whatsapp.config";
import WhatsappModal from "../ui/whatsapp-modal";

export const NavBar = () => {
  const [navState, setNavState] = useState(false);

  const [whatsappModal, setWhatsappModal] = useState(false);
  return (
    <>
      <NavContainer>
        <Link href={"/"}>
          <Logo />
        </Link>
        <NavContainerLinks $open={navState}>
          {navLinks.map((link) => {
            return (
              <NavLink
                key={link.id}
                href={link.link}
                onClick={() => setNavState(false)}
              >
                {link.name}
              </NavLink>
            );
          })}
          <Button onClick={() => setWhatsappModal(true)}>Shop Now</Button>
        </NavContainerLinks>
        <div className="menu" onClick={() => setNavState(!navState)}>
          <Image src={navState ? CloseIcon : MenuIcon} alt="menu-icon" />
        </div>
      </NavContainer>

      <WhatsappModal
        openState={whatsappModal}
        closeAction={() => setWhatsappModal(false)}
      />
    </>
  );
};
