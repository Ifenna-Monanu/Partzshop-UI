"use client";

import styled from "styled-components";

export const FaqSectionContainer = styled.section`
  position: relative;
`;

export const FaqSectionWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 4rem 1rem;
  margin: auto;
  width: 100%;
  max-width: 1240px;
  @media (max-width: 760px){
    grid-template-columns: auto;
  }
`;

export const FaqSectionHeading = styled.div`
  display: grid;
  gap: 1.5rem;
  place-content: start;
  span {
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    color: #1d1d1d;
    background: #faf7e5;
    padding: 0.7rem 1.5rem;
    width: fit-content;
    border-radius: 20rem;
  }
  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #232323;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #52575c;
  }
  a {
    display: inline-block;
    color: #0043e6;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    background: #ffffff;
    width: fit-content;
    padding: 0.7rem 1.5rem;
    border: 1px solid #0043e6;
    border-radius: 20rem;
    cursor: pointer;
  }
`;

export const FaqSectionContent = styled.div`
display: grid;
gap: 1rem;
`;

export const AccordionItem = styled.div`
  display: grid;
  gap: .5rem;
  padding: 1rem 2rem;
  border: 1px solid #3a3a3a2e;
  border-radius: 0.5rem;
`;

export const AccordionItem_header = styled.div<{$active: boolean}>`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
  color: #25282B;
  font-size: 16px;
  cursor: pointer;
  &::after {
    content: "${props=>props.$active ? "-" : "+" }";
    display: inline-flex;
    align-items: center;
    font-size: 32px;
    font-weight: 600;
    height: 1.5rem;
    width: 1rem;
  }

`;

export const AccordionItem_content = styled.div<{$active: boolean}>`
font-size: 18px;
font-weight: 500;
display: ${props=>props.$active ? "block" : "none"};
`;
