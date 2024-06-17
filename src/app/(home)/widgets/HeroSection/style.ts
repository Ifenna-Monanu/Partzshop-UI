"use client";

import styled from "styled-components";

export const HeroSectionContainer = styled.section`
    position: relative;
`;

export const HeroSectionWrapper = styled.div`
    position: relative;
    padding: 0 0 2rem;
`;

export const HeroSectionText = styled.div`
    position: absolute;
    top: 0;
    left: 5%;
    height: 100%;
    max-height: 23rem;
    width: 100%;
    max-width: 26rem;
    display: grid;
    place-content: start;
    gap: 1rem;
    padding: 3rem 1rem;
    background: rgba(255, 255, 255, 0.8);
    z-index: 10;
    h1{
        font-size: 32px;
        line-height: 1.5;
        text-transform: uppercase;
        span{
            display: block;
            color: #0043E6;
        }
    }
    p{
        font-size: 14px;
        line-height: 1.5;
        color: #52575C;
        max-width: 90%;
    }
    button {
        place-self: start;
        display: inline-block;
        color: #ffffff;
        font-weight: 500;
        font-size: 14px;
        background-color: #0043E6;
        padding: 1rem 1.5rem;
        border: none;
        border-radius: 20rem;
    }
    @media (max-width: 450px){
        position: relative;
        top: 0;
        left: 0
    }
`;

export const HeroSectionSlide = styled.div`
    width: 100%;
    height: 32rem;
    overflow: hidden;
    .HeroSection-slides {
        width: 100%;
        height: 100%;
    }
    .slideItem {
        width: 85% !important;
        max-width: 28rem;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    @media (max-width: 450px){
        height: 20rem;
    }
`;
