"use client";

import styled from "styled-components";

export const WhyChooseSectionContainer = styled.section`
  position: relative;
`;

export const WhyChooseSectionWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 3rem;
  padding: 4rem 1rem;
  max-width: 1240px;
  width: 100%;
  margin: auto;
`;

export const WhyChooseSectionHeading = styled.div`
  display: grid;
  gap: 0.5rem;
  place-items: center;
  max-width: 35rem;
  margin: auto;
  text-align: center;
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

export const WhyChooseSectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

export const WhyChooseCard = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 20rem;
  border-radius: 1rem;
  overflow: hidden;
`;

export const WhyChooseCard_textContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: grid;
  gap: 0.5rem;
  padding: 1.5rem;
  text-transform: capitalize;
  color: #ffffff;
  span {
    font-size: 14px;
  }
  p {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const WhyChooseCard_imageContainer = styled.div`
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
    background: rgb(0, 0, 0, 0.4);
  }
  &:hover {
    color: red;
  }
`;
