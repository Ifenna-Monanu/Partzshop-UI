"use client";

import styled from "styled-components";

export const HeroSectionContainer = styled.section`
  position: relative;
`;

export const HeroSectionWrapper = styled.div`
  position: relative;
  padding: 0 0 2rem;
`;

export const VanguardWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 1rem;
  margin: auto;
  width: 100%;
  max-width: 1240px;
  z-index: 10;
  @media (max-width: 550px) {
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0);
    padding: 0;
  }
`;

export const HeroSectionText = styled.div`
  height: 100%;
  max-height: 23rem;
  width: 100%;
  max-width: 26rem;
  display: grid;
  place-content: start;
  gap: 1rem;
  padding: 3rem 1rem;
  background: rgba(255, 255, 255, 0.8);
  h1 {
    font-size: 32px;
    line-height: 1.5;
    text-transform: uppercase;
    span {
      display: block;
      color: #0043e6;
    }
  }
  p {
    font-size: 14px;
    line-height: 1.5;
    color: #52575c;
    max-width: 90%;
  }
  button {
    place-self: start;
    display: inline-block;
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
    background-color: #0043e6;
    padding: 1rem 1.5rem;
    border: none;
    cursor: pointer;
    border-radius: 20rem;
  }
`;

export const HeroSectionSlide = styled.div`
  width: 100%;
  height: 32rem;
  .HeroSection-slides {
    width: 100%;
    height: 100%;
  }
  .slideItem {
    width: 85% !important;
    max-width: 28rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 450px) {
    height: 20rem;
  }
`;

export const SlideFooter = styled.div`
  display: none;
  //   display: flex;
  align-items: center;
  justify-content: end;
  gap: 2rem;
  padding: 1rem;
  margin: auto;
  width: 100%;
  max-width: 1240px;
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    /* padding: 20px; */
    background: #e2e2e24d;
    border: none;
    border-radius: 50rem;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
    }
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
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;
    font-weight: 600;
    color: #ffffff;
    background: #0043e6;
    border: 1px solid #0043e6;
    border-radius: 50rem;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
    }
  }
  button.primary-btn {
    color: #ffffff;
    background: #0043e6;
    border: 1px solid #0043e6;
  }
  button.secondary-btn {
    color: #0043e6;
    background: #ffffff;
    border: 1px solid #0043e6;
  }
`;
