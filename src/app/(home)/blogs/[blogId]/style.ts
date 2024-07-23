"use client";

import styled from "styled-components";

export const BlogPageContainer = styled.section`
  position: relative;
`;

export const BlogPageWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 3rem;
  padding: 2rem 1rem;
  margin: auto;
  width: 100%;
  max-width: 1240px;
`;

export const BlogPageHeading = styled.div`
  display: grid;
`;

export const BackButton = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  paddding: 0.25rem 0.5rem;
  font-size: 14px;
  color: #0043e6;
`;

export const BlogPageContent = styled.div`
  display: grid;
  gap: 2rem;
  margin: auto;
  width: 100%;
  max-width: 940px;
`;

export const Blog_Heading = styled.div`
  display: grid;
  gap: 1rem;
  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #000000;
  }
`;

export const Blog_DateTime = styled.p`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 14px;
  font-weight: 400;
  color: #25282b;
`;

export const Blog_ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 26rem;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Blog_TextContainer = styled.div`
  display: grid;
  gap: 1rem;
  line-height: 1.5;
  color: #000000;
  p {
    font-size: 16px;
    font-weight: 400;
    &:last-child{
    margin-top: 1rem;
    }
  }
  h2 {
    margin-top: 1rem;
    font-size: 20px;
    font-weight: 700;
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
  }
  ol {
    list-style-position: inside;
    li {
      margin-bottom: 0.5rem;
      &:last-child{
        margin-bottom: 0;
      }
      &::marker {
        font-weight: 700;
      }
      b {
        margin-right: 0.25rem;
      }
    }
  }
`;

export const Blog_Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const OtherBlogsContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem 1rem 4rem;
  margin: auto;
  max-width: 1240px;
  width: 100%;
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #101828;
  }
`;

export const OtherBlogsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const BlogItem = styled.a`
  display: grid;
  align-items: start;
  gap: 1rem;
  height: auto;
  text-decoration: none;
  overflow: hidden;
`;

export const BlogItem_imageContainer = styled.div`
  width: 100%;
  height: 15rem;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
