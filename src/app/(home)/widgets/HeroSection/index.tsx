"use client";

import { useRef } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
// Core modules imports are same as usual
import { Autoplay, Virtual, Navigation, Pagination } from "swiper/modules";

import {
  HeroSectionContainer,
  HeroSectionSlide,
  HeroSectionText,
  HeroSectionWrapper,
  SlideFooter,
  VanguardWrapper,
} from "./style";

import "swiper/css";
import "swiper/css/autoplay";

import SlideImage01 from "@/app/assets/images/vanguard-image-1.png";
import SlideImage02 from "@/app/assets/images/vanguard-image-2.png";
import SlideImage03 from "@/app/assets/images/vanguard-image-3.png";
import { SlideLeftIcon, SlideRightIcon } from "@/app/assets/svg";

export function HeroSection() {
  const heroSwipper = useRef<SwiperRef>(null);
  return (
    <HeroSectionContainer>
      <HeroSectionWrapper>
        <VanguardWrapper>
          <HeroSectionText>
            <h1>
              Get The Most <span>Authentic Parts</span> For Your Car
            </h1>
            <p>
              Partzshop offers you access to buy original top-quality car parts
              for your vehicle at mind-blowing prices.
            </p>
            <button>Order now</button>
          </HeroSectionText>
        </VanguardWrapper>
        <HeroSectionSlide>
          <Swiper
            ref={heroSwipper}
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

          <SlideFooter>
            <button onClick={()=>heroSwipper.current?.swiper.slidePrev()}>
              <Image
                src={SlideLeftIcon}
                alt="slide left"
                width={18}
                height={18}
              />
            </button>
            <button onClick={()=>heroSwipper.current?.swiper.slideNext()}>
              <Image
                src={SlideRightIcon}
                alt="slide right"
                width={18}
                height={18}
              />
            </button>
          </SlideFooter>
        </HeroSectionSlide>
      </HeroSectionWrapper>
    </HeroSectionContainer>
  );
}
