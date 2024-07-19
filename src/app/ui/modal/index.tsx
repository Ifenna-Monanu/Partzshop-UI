import React, { ReactElement } from "react";
import {
  CloseModalIcon,
  ModalBody,
  ModalContainer,
  ModalOverlay,
  ModalWrapper,
} from "./style";
import Image from "next/image";
import { ModalCloseIcon } from "@/app/assets/svg";

interface ModalProps {
  show: boolean;
  onClose(): void;
  maxWidth?: number;
  children?: React.ReactNode;
}
export default function Modal({
  maxWidth,
  show,
  onClose,
  children,
}: ModalProps) {
  return (
    <ModalContainer $open={show}>
      <ModalOverlay onClick={onClose} />
      <ModalWrapper $maxWidth={maxWidth}>
        <CloseModalIcon onClick={onClose}>
          <Image src={ModalCloseIcon} alt="Close Modal Button" />
        </CloseModalIcon>
        <>{children}</>
      </ModalWrapper>
    </ModalContainer>
  );
}

interface ModalBodyProps {
  children?: React.ReactNode;
}
Modal.Body =  function modalBody ({children}: ModalBodyProps){
  return (
    <ModalBody>
      <>{children}</>
    </ModalBody>
  )
}
