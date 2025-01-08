"use client";

import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { ContainerWrapper } from "./style";
import {
  AboutSection,
  BlogSection,
  FaqSection,
  HeroSection,
  HowItWorksSection,
  ProductsSection,
  ServiceSection,
  TestimonialSection,
  WhyChooseSection,
} from "./widgets/index";

export default function Home() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  })
  return (
    <ContainerWrapper>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseSection />
      <ProductsSection />
      <HowItWorksSection />
      <TestimonialSection />
      <FaqSection />
      <BlogSection />
    </ContainerWrapper>
  );
}
