"use client";

import styled, { keyframes } from "styled-components";

const linearLoop = keyframes`
from {
  transform: translateX(0);
}

to {
  transform: translateX(calc(-100% - 1rem));
}
`;

export const AboutSectionContainer = styled.section`
  position: relative;
  line-height: 1.5;
`;

export const AboutSectionWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  place-items: start;
  padding: 3rem 1rem;
  margin: auto;
  width: 100%;
  max-width: 1240px;

  @media (max-width: 650px) {
    grid-template-columns: auto;
    gap: 3rem;
  }
`;

export const TextContentWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
  place-items: start;
  max-width: 35rem;
  span {
    display: inline-block;
    padding: 0.7rem 2.5rem;
    font-size: 14px;
    font-weight: 500;
    color: #0043e6;
    background: #f0f4ff;
    border-radius: 20rem;
  }
  h1 {
    font-size: 32px;
    font-weight: 700;
    text-transform: capitalize;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #52575c;
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CarBrandsContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  gap: 1rem;
  margin: auto;
  padding: 1rem;
  width: 100%;
  max-width: 1240px;
  overflow: hidden;
  h3 {
    font-size: 14px;
    font-weight: 500;
    color: #0043e6;
    text-align: center;
    text-transform: capitalize;
  }
`;

export const CarBrandsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const CarBrands = styled.div`
  display: flex;
  visibility: collapse;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  &:first-child{
    visibility: visible;
    margin: auto;
  }
  @media (max-width: 1140px) {
    visibility: visible;
    animation: ${linearLoop} 20s linear infinite;
  }
`;

export const CarBrand = styled.div`
  display: inline-flex;
  width: 5rem;
  height: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;
