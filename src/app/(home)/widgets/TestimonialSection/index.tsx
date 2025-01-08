import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  DotElm,
  DotsWrapper,
  SlideFooter,
  TestimonialSectionContainer,
  TestimonialSectionContent,
  TestimonialSectionHeading,
  TestimonialSectionWrapper,
  TestimonialSlides,
  TestimonialSlides_content,
  TestimonialSlides_footer,
  TestimonialSlides_profileDetails,
  TestimonialSlides_profileImage,
} from "./style";

import TestimonialImage from "@/app/assets/images/testimonial-image.png";
import SlideRightIcon from "@/app/assets/svg/slide-right.svg";
import SlideLeftIcon from "@/app/assets/svg/slide-left.svg";
import { useRef, useState } from "react";

export function TestimonialSection() {
  const testimonialSwiper = useRef<SwiperRef>(null);

  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <TestimonialSectionContainer>
      <TestimonialSectionWrapper data-aos="zoom-out-up">
        <TestimonialSectionHeading>
          <span>Tesimonials</span>
          <h1>What our customers have to say</h1>
          <p>Don&apos;t just take our word for it.</p>
        </TestimonialSectionHeading>

        <TestimonialSectionContent>
          <Swiper
            ref={testimonialSwiper}
            slidesPerView={"auto"}
            spaceBetween={15}
            modules={[Pagination]}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)}
            className="testimonial-slides"
          >
            <SwiperSlide className="slideItem">
              <TestimonialSlides>
                <span className="bigQuotes">“</span>
                <TestimonialSlides_content>
                  <p>
                    We love PartzShop! Our drivers were using it for their
                    projects, so clients already knew what PartzShop was and how
                    to use it.
                  </p>
                </TestimonialSlides_content>
                <TestimonialSlides_footer>
                  <TestimonialSlides_profileImage>
                    <Image src={TestimonialImage} alt="Testimonial Image" />
                  </TestimonialSlides_profileImage>
                  <TestimonialSlides_profileDetails>
                    <p>Mike Egwunwoke</p>
                    <span>Software Developer, Xend Finance</span>
                  </TestimonialSlides_profileDetails>
                </TestimonialSlides_footer>
              </TestimonialSlides>
            </SwiperSlide>

            <SwiperSlide className="slideItem">
              <TestimonialSlides>
                <span className="bigQuotes">“</span>
                <TestimonialSlides_content>
                  <p>
                    We love PartzShop! Our drivers were using it for their
                    projects, so clients already knew what PartzShop was and how
                    to use it.
                  </p>
                </TestimonialSlides_content>
                <TestimonialSlides_footer>
                  <TestimonialSlides_profileImage>
                    <Image src={TestimonialImage} alt="Testimonial Image" />
                  </TestimonialSlides_profileImage>
                  <TestimonialSlides_profileDetails>
                    <p>Mike Egwunwoke</p>
                    <span>Software Developer, Xend Finance</span>
                  </TestimonialSlides_profileDetails>
                </TestimonialSlides_footer>
              </TestimonialSlides>
            </SwiperSlide>

            <SwiperSlide className="slideItem">
              <TestimonialSlides>
                <span className="bigQuotes">“</span>
                <TestimonialSlides_content>
                  <p>
                    We love PartzShop! Our drivers were using it for their
                    projects, so clients already knew what PartzShop was and how
                    to use it.
                  </p>
                </TestimonialSlides_content>
                <TestimonialSlides_footer>
                  <TestimonialSlides_profileImage>
                    <Image src={TestimonialImage} alt="Testimonial Image" />
                  </TestimonialSlides_profileImage>
                  <TestimonialSlides_profileDetails>
                    <p>Mike Egwunwoke</p>
                    <span>Software Developer, Xend Finance</span>
                  </TestimonialSlides_profileDetails>
                </TestimonialSlides_footer>
              </TestimonialSlides>
            </SwiperSlide>

            <SwiperSlide className="slideItem">
              <TestimonialSlides>
                <span className="bigQuotes">“</span>
                <TestimonialSlides_content>
                  <p>
                    We love PartzShop! Our drivers were using it for their
                    projects, so clients already knew what PartzShop was and how
                    to use it.
                  </p>
                </TestimonialSlides_content>
                <TestimonialSlides_footer>
                  <TestimonialSlides_profileImage>
                    <Image src={TestimonialImage} alt="Testimonial Image" />
                  </TestimonialSlides_profileImage>
                  <TestimonialSlides_profileDetails>
                    <p>Mike Egwunwoke</p>
                    <span>Software Developer, Xend Finance</span>
                  </TestimonialSlides_profileDetails>
                </TestimonialSlides_footer>
              </TestimonialSlides>
            </SwiperSlide>

            <SwiperSlide className="slideItem">
              <TestimonialSlides>
                <span className="bigQuotes">“</span>
                <TestimonialSlides_content>
                  <p>
                    We love PartzShop! Our drivers were using it for their
                    projects, so clients already knew what PartzShop was and how
                    to use it.
                  </p>
                </TestimonialSlides_content>
                <TestimonialSlides_footer>
                  <TestimonialSlides_profileImage>
                    <Image src={TestimonialImage} alt="Testimonial Image" />
                  </TestimonialSlides_profileImage>
                  <TestimonialSlides_profileDetails>
                    <p>Mike Egwunwoke</p>
                    <span>Software Developer, Xend Finance</span>
                  </TestimonialSlides_profileDetails>
                </TestimonialSlides_footer>
              </TestimonialSlides>
            </SwiperSlide>

            <SwiperSlide className="slideItem">
              <TestimonialSlides>
                <span className="bigQuotes">“</span>
                <TestimonialSlides_content>
                  <p>
                    We love PartzShop! Our drivers were using it for their
                    projects, so clients already knew what PartzShop was and how
                    to use it.
                  </p>
                </TestimonialSlides_content>
                <TestimonialSlides_footer>
                  <TestimonialSlides_profileImage>
                    <Image src={TestimonialImage} alt="Testimonial Image" />
                  </TestimonialSlides_profileImage>
                  <TestimonialSlides_profileDetails>
                    <p>Mike Egwunwoke</p>
                    <span>Software Developer, Xend Finance</span>
                  </TestimonialSlides_profileDetails>
                </TestimonialSlides_footer>
              </TestimonialSlides>
            </SwiperSlide>
          </Swiper>
          <SlideFooter>
            <button
              onClick={() => testimonialSwiper.current?.swiper?.slidePrev()}
              disabled={testimonialSwiper?.current?.swiper?.isBeginning}
            >
              <Image
                src={SlideLeftIcon}
                alt="Slide left"
                width={24}
                height={24}
              />
            </button>
            <DotsWrapper>
              <DotElm $active={activeSlide === 1}></DotElm>
              <DotElm $active={activeSlide === 2}></DotElm>
              <DotElm $active={activeSlide === 3}></DotElm>
              <DotElm $active={activeSlide === 4}></DotElm>
              <DotElm $active={activeSlide === 5}></DotElm>
              <DotElm $active={activeSlide === 6}></DotElm>
            </DotsWrapper>
            <button
              onClick={() => testimonialSwiper?.current?.swiper?.slideNext()}
              disabled={testimonialSwiper?.current?.swiper?.isEnd}
            >
              <Image
                src={SlideRightIcon}
                alt="Slide right"
                width={24}
                height={24}
              />
            </button>
          </SlideFooter>
        </TestimonialSectionContent>
      </TestimonialSectionWrapper>
    </TestimonialSectionContainer>
  );
}
