"use client";

import styled from "styled-components";

export const HowItWorksSectionContainer = styled.section`
  position: relative;
`;

export const HowItWorksSectionWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: start;
  align-items: center;
  gap: 2rem;
  padding: 3rem 1rem;
  margin: auto;
  max-width: 1240px;
  width: 100%;

  @media (max-width: 760px) {
    grid-template-columns: auto;
    gap: 3rem;
  }
`;

export const TextContentWrapper = styled.div`
  display: grid;
  gap: 2.5rem;
  place-items: start;
  max-width: 28rem;
`;

export const TextContentHeading = styled.div`
  display: grid;
  gap: 1rem;
  place-items: start;
  span {
    display: inline-block;
    padding: 0.7rem 2.5rem;
    font-size: 14px;
    font-weight: 500;
    color: #0043e6;
    text-transform: uppercase;
    background: #f0f4ff;
    border-radius: 20rem;
  }
  h1 {
    font-size: 32px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #52575c;
  }
`;

export const StepLists = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const StepItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 18px;
    font-weight: 500;
    color: #232323;
  }
  img{
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const ImageWrapper = styled.div`
  height: 30rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
