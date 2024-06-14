"use client";

import styled from "styled-components";

export const ServiceSectionContainer = styled.section`
  position: relative;
`;

export const ServiceSectionWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 3rem;
  max-width: 1240px;
  width: 100%;
  margin: auto;
  padding: 4rem 1rem;
`;

export const ServiceSectionHeading = styled.div`
  display: grid;
  gap: 0.5rem;
  place-items: center;
  max-width: 35rem;
  margin: auto;
  span {
    display: inline-block;
    padding: 0.7rem 2.5rem;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: #0043e6;
    background: #f0f4ff;
    border-radius: 20rem;
  }
  h1 {
    font-size: 32px;
    font-weight: 700;
    text-transform: capitalize;
  }
`;

export const ServiceSectionContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  `;
  
  export const ServiceCard = styled.div`
  position: relative;
  height: 18rem;
  border-radius: 1rem;
  overflow: hidden;
  p{
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 18px;
    font-wight: 700;
    color: #ffffff;
    padding: 1.5rem;
  }
`;

export const ServiceImageContainer = styled.div`
  position: relative;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(5, 29, 87, 0) 15.08%,
      #051d57 100%
    );
  }
`;
