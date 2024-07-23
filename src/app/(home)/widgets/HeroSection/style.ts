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
  width: 100%;
  max-width: 26rem;
  display: grid;
  place-content: start;
  gap: 1rem;
  padding: 3rem 1rem 5rem;
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
  }
  @media (max-width: 550px) {
    padding: 2rem 1rem;
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
