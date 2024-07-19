"use client";

import { useRef, useState } from "react";
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
import { SlideLeftIcon, SlideRightIcon, WhatsappIcon } from "@/app/assets/svg";
import Modal from "@/app/ui/modal";
import Button from "@/app/ui/button";
import WhatsappConfig from "@/util/whatsapp.config";

export function HeroSection() {
  const heroSwipper = useRef<SwiperRef>(null);

  const [whatsappModal, setWhatsappModal] = useState(false);
  return (
    <>
      <HeroSectionContainer>
        <HeroSectionWrapper>
          <VanguardWrapper>
            <HeroSectionText>
              <h1>
                Get The Most <span>Authentic Parts</span> For Your Car
              </h1>
              <p>
                Partzshop offers you access to buy original top-quality car
                parts for your vehicle at mind-blowing prices.
              </p>
              <Button onClick={() => setWhatsappModal(true)}>Order now</Button>
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
              <button onClick={() => heroSwipper.current?.swiper.slidePrev()}>
                <Image
                  src={SlideLeftIcon}
                  alt="slide left"
                  width={18}
                  height={18}
                />
              </button>
              <button onClick={() => heroSwipper.current?.swiper.slideNext()}>
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

      {/* Whatsapp Modal */}
      <Modal
        maxWidth={400}
        show={whatsappModal}
        onClose={() => setWhatsappModal(false)}
      >
        <Modal.Body>
          <Image src={WhatsappIcon} alt="Whatsapp Icon" width={54} />
          <h2>
            Our sales reps are available 24/7 on WhatsApp to take your order and
            all your car needs.
          </h2>
          <p>Feel free to ask for tips and tricks to keep your car running!</p>
          <Button
            btnType="primary"
            variant="full"
            onClick={() => window.open(WhatsappConfig.link, "_blank")}
          >
            Proceed to Shop
          </Button>
          <Button
            btnType="secondary"
            variant="full"
            onClick={() => setWhatsappModal(false)}
          >
            Go Back
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
