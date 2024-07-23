"use client";

import styled from "styled-components";

export const BlogSectionContainer = styled.section`
position: relative;
`;

export const BlogSectionWrapper = styled.div`
position: relative;
display: grid;
gap: 2rem;
padding: 4rem 1rem;
margin: auto;
width: 100%;
max-width: 1240px;
`;

export const BlogSectionHeading = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
h1{
    font-size: 32px;
    font-weight: 700;
    color: #101828;
}
a {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    color: #0043E6;
    text-decoration: none;
}
`;

export const BlogSectionContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    align-items: stretch;
    gap: 1.5rem;
    row-gap: 3rem;

`;

export const BlogCard = styled.a`
    display: grid;
    gap: 1.5rem;
    place-content: start;
    text-decoration: none;
`;

export const BlogCard_imageContainer = styled.div`
    width: 100%;
    height: 18rem;
    border-radius: 1rem;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const BlogCard_textContainer = styled.div`
    display: grid;
    gap: 1rem;
    h2 {
        display: flex;
        align-items: start;
        gap: 1rem;
        font-size: 21px;
        font-weight: 700;
        color: #101828;
    }
    p {
        font-size: 16px;
        font-weight: 400;
        color: #667085;
    }
    span {
        font-size: 14px;
        font-weight: 400;
        color: #0043E6;
    }
`
