"use client";

import styled from "styled-components";

export const BlogsPageContainer = styled.section`
  position: relative;
`;

export const BlogsPageWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 3rem;
  padding: 4rem 1rem;
  margin: auto;
  width: 100%;
  max-width: 1240px;
`;

export const BlogsPageHeading = styled.div`
  display: grid;
  gap: 0.5rem;
  place-items: center;
  text-align: center;
  margin: auto;
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

export const BlogsPageContent = styled.div`
  display: grid;
  gap: 1rem;
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #101828;
  }
`;

export const BlogsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  gap: 1.5rem;
  width: 100%;
  @media (max-width: 550px) {
    grid-template-columns: auto;
  }
`;

export const BlogItem = styled.a`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  gap: 1rem;
  height: 100%;
  max-height: 10rem;
  text-decoration: none;
  overflow: hidden;
  &:first-child {
    grid-row: span 2 / span 2;
    grid-template-columns: auto;
    max-height: 21rem;
  }
  @media (max-width: 950px) {
    grid-template-columns: auto;
    max-height: none;
    &:first-child {
      height: auto;
      max-height: none;
      grid-row: auto;
    }
  }
`;

export const BlogItem_imageContainer = styled.div`
  width: 100%;
  height: inherit;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 950px) {
    height: 15rem;
  }
`;

export const BlogItem_textContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  h2 {
    display: flex;
    align-items: start;
    gap: 1rem;
    font-size: 18px;
    font-weight: 700;
    color: #101828;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #667085;
  }
  span {
    font-size: 12px;
    font-weight: 400;
    color: #0043e6;
  }
`;
