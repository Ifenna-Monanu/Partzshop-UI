import Image from "next/image";
import {
  AboutSectionContainer,
  AboutSectionWrapper,
  CarBrand,
  CarBrands,
  CarBrandsContainer,
  CarBrandsWrapper,
  ImageWrapper,
  TextContentWrapper,
} from "./style";

import AboutSectionImage from "@/app/assets/images/about-section.png";

import {
  AudiImage,
  BMWImage,
  ChevroletImage,
  FordImage,
  HondaImage,
  JeepImage,
  LexusImage,
  MercedesImage,
  NissanImage,
  TeslaImage,
  VolkswagenImage,
} from "@/app/assets/images/car-brands";

export function AboutSection() {
  return (
    <AboutSectionContainer id="about">
      <AboutSectionWrapper>
        <TextContentWrapper>
          <span>About us</span>
          <h1>Who We Are</h1>
          <p>
            We are an automobile brand dedicated to solving all automobile
            problems while bringing smiles and relief to car owners.
          </p>
        </TextContentWrapper>
        <ImageWrapper>
          <Image src={AboutSectionImage} alt="About Section Image" />
        </ImageWrapper>
      </AboutSectionWrapper>

      <CarBrandsContainer>
        <h3>A wide pool of car brands and manufacturer</h3>
        <CarBrandsWrapper>
          <CarBrands>
            <CarBrand>
              <Image src={AudiImage} alt="Audi image" />
            </CarBrand>
            <CarBrand>
              <Image src={BMWImage} alt="BMW image" />
            </CarBrand>
            <CarBrand>
              <Image src={ChevroletImage} alt="Chevrolet image" />
            </CarBrand>
            <CarBrand>
              <Image src={FordImage} alt="Ford image" />
            </CarBrand>
            <CarBrand>
              <Image src={HondaImage} alt="Honda image" />
            </CarBrand>
            <CarBrand>
              <Image src={JeepImage} alt="Jeep image" />
            </CarBrand>
            <CarBrand>
              <Image src={LexusImage} alt="Lexus image" />
            </CarBrand>
            <CarBrand>
              <Image src={MercedesImage} alt="Mercedes image" />
            </CarBrand>
            <CarBrand>
              <Image src={NissanImage} alt="Nissan image" />
            </CarBrand>
            <CarBrand>
              <Image src={TeslaImage} alt="Tesla image" />
            </CarBrand>
            <CarBrand>
              <Image src={VolkswagenImage} alt="Volkswagen image" />
            </CarBrand>
          </CarBrands>

          <CarBrands>
            <CarBrand>
              <Image src={AudiImage} alt="Audi image" />
            </CarBrand>
            <CarBrand>
              <Image src={BMWImage} alt="BMW image" />
            </CarBrand>
            <CarBrand>
              <Image src={ChevroletImage} alt="Chevrolet image" />
            </CarBrand>
            <CarBrand>
              <Image src={FordImage} alt="Ford image" />
            </CarBrand>
            <CarBrand>
              <Image src={HondaImage} alt="Honda image" />
            </CarBrand>
            <CarBrand>
              <Image src={JeepImage} alt="Jeep image" />
            </CarBrand>
            <CarBrand>
              <Image src={LexusImage} alt="Lexus image" />
            </CarBrand>
            <CarBrand>
              <Image src={MercedesImage} alt="Mercedes image" />
            </CarBrand>
            <CarBrand>
              <Image src={NissanImage} alt="Nissan image" />
            </CarBrand>
            <CarBrand>
              <Image src={TeslaImage} alt="Tesla image" />
            </CarBrand>
            <CarBrand>
              <Image src={VolkswagenImage} alt="Volkswagen image" />
            </CarBrand>
          </CarBrands>
        </CarBrandsWrapper>
      </CarBrandsContainer>
    </AboutSectionContainer>
  );
}
