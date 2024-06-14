"use client";

import { ContainerWrapper } from "./style";
import { AboutSection, BlogSection, FaqSection, HeroSection, HowItWorksSection, ProductsSection, ServiceSection, TestimonialSection, WhyChooseSection } from "./widgets/index";

export default function Home() {
  return <ContainerWrapper>
    <HeroSection></HeroSection>
    <AboutSection></AboutSection>
    <ServiceSection></ServiceSection>
    <WhyChooseSection></WhyChooseSection>
    <ProductsSection></ProductsSection>
    <HowItWorksSection></HowItWorksSection>
    <TestimonialSection></TestimonialSection>
    <FaqSection></FaqSection>
    <BlogSection></BlogSection>
  </ContainerWrapper>;
}
