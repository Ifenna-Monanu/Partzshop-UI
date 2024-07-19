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
              <NavLink key={link.id} href={link.link} onClick={()=>setNavState(false)}>
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

      <Modal
        maxWidth={400}
        show={whatsappModal}
        onClose={() => setWhatsappModal(false)}
      >
        <Modal.Body>
          <Image src={WhatsappIcon} alt="Whatsapp Icon" width={54} />
          <h2>
            Our sales reps are available 24/7 on WhatsApp to take your order and
            all your car needs.
          </h2>
          <p>Feel free to ask for tips and tricks to keep your car running!</p>
          <Button
            btnType="primary"
            variant="full"
            onClick={() => window.open(WhatsappConfig.link, "_blank")}
          >
            Proceed to Shop
          </Button>
          <Button
            btnType="secondary"
            variant="full"
            onClick={() => setWhatsappModal(false)}
          >
            Go Back
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};
