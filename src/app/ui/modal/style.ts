import styled from "styled-components";

export const ModalContainer = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "grid" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  padding: 1rem;
  z-index: 99999;
`;

export const ModalOverlay = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000070;
`;

export const ModalWrapper = styled.div<{ $maxWidth?: number }>`
  position: relative;
  display: grid;
  gap: 1rem;
  padding: 4rem 2rem;
  margin: auto;
  max-width: ${({ $maxWidth }) => ($maxWidth ? `${$maxWidth}px` : "550px")};
  width: 100%;
  background: #ffffff;
  border-radius: 1rem;
  pointer-events: all;
`;

export const CloseModalIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  background: #fb4e4e20;
  border-radius: 0.5rem;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ModalBody = styled.div`
  display: grid;
  gap: 1.5rem;
  place-items: center;
  line-height: 1.4;
  text-align: center;
  h2 {
    color: #1b495d;
    font-size: 20px;
    font-weight: 700;
  }
  p {
    display: block;
    padding: 0 1rem;
    color: #52575c;
    font-size: 16px;
    font-weight: 400;
  }
`;
