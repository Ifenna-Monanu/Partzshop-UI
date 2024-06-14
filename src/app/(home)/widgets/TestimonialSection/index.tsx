import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { TestimonialSectionContainer, TestimonialSectionContent, TestimonialSectionHeading, TestimonialSectionWrapper, TestimonialSlides, TestimonialSlides_content, TestimonialSlides_footer, TestimonialSlides_profileDetails, TestimonialSlides_profileImage } from "./style";

import TestimonialImage from "@/app/assets/images/testimonial-image.png";

export function TestimonialSection() {
    return <TestimonialSectionContainer>
        <TestimonialSectionWrapper>
            <TestimonialSectionHeading>
                <span>Tesimonials</span>
                <h1>What our customers have to say</h1>
                <p>Don't just take our word for it.</p>
            </TestimonialSectionHeading>

            <TestimonialSectionContent>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={15}
                    // modules={}
                    // loop={true}
                    navigation={true}
                    className="testimonial-slides">
                    <SwiperSlide className="slideItem">
                        <TestimonialSlides>
                            <span className="bigQuotes">“</span>
                            <TestimonialSlides_content>
                                <p>We love PartzShop! Our drivers were using it for their projects, so clients already knew what PartzShop was and how to use it.</p>
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
                                <p>We love PartzShop! Our drivers were using it for their projects, so clients already knew what PartzShop was and how to use it.</p>
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
                                <p>We love PartzShop! Our drivers were using it for their projects, so clients already knew what PartzShop was and how to use it.</p>
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
                                <p>We love PartzShop! Our drivers were using it for their projects, so clients already knew what PartzShop was and how to use it.</p>
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
                                <p>We love PartzShop! Our drivers were using it for their projects, so clients already knew what PartzShop was and how to use it.</p>
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
                                <p>We love PartzShop! Our drivers were using it for their projects, so clients already knew what PartzShop was and how to use it.</p>
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
            </TestimonialSectionContent>
        </TestimonialSectionWrapper>
    </TestimonialSectionContainer>
}