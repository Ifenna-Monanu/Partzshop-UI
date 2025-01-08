"use client";

import styled from "styled-components";

export const ProductSectionContainer = styled.section`
  position: relative;
`;

export const ProductSectionWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 3rem;
  max-width: 1240px;
  width: 100%;
  margin: auto;
  padding: 4rem 1rem;
`;

export const ProductSectionHeading = styled.div`
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

export const ProductSectionContent = styled.div`
  display: grid;
  gap: 3rem;
  place-items: center;
  width: 100%;
`;

export const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  width: 100%;
`;

export const ProductCard = styled.div`
  position: relative;
  height: 20rem;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  p {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    font-size: 20px;
    font-weight: 700;
    color: #f5f5f5;
    text-transform: capitalize;
    text-align: center;
    pointer-events: none;
  }
`;

export const ProductCard_imageContainer = styled.div`
	position relative;
	height: 100%;
	transition: .5s ease-in;
	background: #CACCCF;
	img{
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&::after{
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgb(0, 0, 0, 0.5);
	}
	&:hover{
		transform: scale(1.2);
	}
`;

export const StoreButton = styled.a`
  place-self: start;
  display: inline-block;
  color: #0043e6;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  background: #ffffff;
  padding: 0.7rem 1.5rem;
  margin: auto;
  border: 1px solid #0043e6;
  border-radius: 20rem;
  cursor: pointer;
`;
