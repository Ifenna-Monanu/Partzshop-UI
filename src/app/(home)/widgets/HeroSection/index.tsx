"use client";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Core modules imports are same as usual
import { Autoplay, Virtual, Navigation, Pagination } from "swiper/modules";

import {
  HeroSectionContainer,
  HeroSectionSlide,
  HeroSectionText,
  HeroSectionWrapper,
} from "./style";

import "swiper/css";
import "swiper/css/autoplay";

import SlideImage01 from "@/app/assets/images/vanguard-image-1.png";
import SlideImage02 from "@/app/assets/images/vanguard-image-2.png";
import SlideImage03 from "@/app/assets/images/vanguard-image-3.png";


export function HeroSection(){
    return <HeroSectionContainer>
    <HeroSectionWrapper>
      <HeroSectionText>
        <h1>Get The Most <span>Authentic Parts</span> For Your Car</h1>
        <p>
          Partzshop offers you access to buy original top-quality car parts
          for your vehicle at mind-blowing prices.
        </p>
        <button>Order now</button>
      </HeroSectionText>
      <HeroSectionSlide>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          modules={[Autoplay, Virtual]}
          centeredSlides={true}
          autoplay={true}
          loop={true}
          navigation={true}
          className="HeroSection-slides"
        >
          <SwiperSlide className="slideItem">
            <Image src={SlideImage01} alt="Slide-1" priority />
          </SwiperSlide>
          <SwiperSlide className="slideItem">
            <Image src={SlideImage02} alt="Slide-2" priority />
          </SwiperSlide>
          <SwiperSlide className="slideItem">
            <Image src={SlideImage03} alt="Slide-3" priority />
          </SwiperSlide>
          <SwiperSlide className="slideItem">
            <Image src={SlideImage01} alt="Slide-1" priority />
          </SwiperSlide>
          <SwiperSlide className="slideItem">
            <Image src={SlideImage02} alt="Slide-2" priority />
          </SwiperSlide>
          <SwiperSlide className="slideItem">
            <Image src={SlideImage03} alt="Slide-3" priority />
          </SwiperSlide>
          <SwiperSlide className="slideItem">
            <Image src={SlideImage01} alt="Slide-1" priority />
          </SwiperSlide>
          <SwiperSlide className="slideItem">
            <Image src={SlideImage02} alt="Slide-2" priority />
          </SwiperSlide>
          <SwiperSlide className="slideItem">
            <Image src={SlideImage03} alt="Slide-3" priority />
          </SwiperSlide>
        </Swiper>
      </HeroSectionSlide>
    </HeroSectionWrapper>
  </HeroSectionContainer>
}