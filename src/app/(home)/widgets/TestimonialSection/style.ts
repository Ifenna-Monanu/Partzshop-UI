"use client";

import styled from "styled-components";

export const TestimonialSectionContainer = styled.section`
  position: relative;
`;

export const TestimonialSectionWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 3rem;
  padding: 4rem 1rem;
  margin: auto;
  max-width: 1240px;
  width: 100%;
`;

export const TestimonialSectionHeading = styled.div`
  display: grid;
  gap: 0.5rem;
  place-items: center;
  text-align: center;
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
    color: #232323;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #52575c;
  }
`;

export const TestimonialSectionContent = styled.div`
  display: grid;
  gap: 1.5rem;
  width: 100%;
  height: auto;
  overflow: hidden;
  .testimonial-slides {
    width: 100%;
    height: 100%;
  }
  .slide-wrapper {
    align-items: stretch;
  }
  .slideItem {
    width: 85% !important;
    max-width: 24rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const TestimonialSlides = styled.div`
  display: grid;
  padding: 1.5rem;
  height: 100%;
  border: 1px solid #cacccf;
  border-radius: 1rem;
  .bigQuotes {
    display: inline-block;
    padding: 0 1rem;
    font-size: 48px;
    font-weight: 700;
    color: #0043e6;
  }
`;

export const TestimonialSlides_content = styled.div`
  margin: 0 0 1rem;
`;

export const TestimonialSlides_footer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const TestimonialSlides_profileImage = styled.div`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 0.5px solid #cacccf;
  border-radius: 30rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TestimonialSlides_profileDetails = styled.div`
  display: grid;
  gap: 0.25rem;
  p {
    font-size: 14px;
    font-weight: 500;
  }
  span {
    font-size: 12px;
    font-weight: 300;
  }
`;

export const SlideFooter = styled.div`
  place-self: end;
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
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

export const DotsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DotElm = styled.span<{ $active: boolean }>`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background: ${(props) => (props.$active ? "#25282B" : "#E8E8E8")};
  border-radius: 30rem;
`;
