"use client";

import { ContainerWrapper } from "./style";
import { AboutSection, BlogSection, FaqSection, HeroSection, HowItWorksSection, ProductsSection, ServiceSection, TestimonialSection, WhyChooseSection } from "./widgets/index";

export default function Home() {
  return <ContainerWrapper>
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <WhyChooseSection />
    <ProductsSection />
    <HowItWorksSection />
    <TestimonialSection />
    <FaqSection />
    <BlogSection />
  </ContainerWrapper>;
}
