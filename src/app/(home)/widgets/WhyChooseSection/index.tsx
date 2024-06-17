import Image from "next/image";

import {
  WhyChooseCard,
  WhyChooseCard_imageContainer,
  WhyChooseCard_textContainer,
  WhyChooseSectionContainer,
  WhyChooseSectionContent,
  WhyChooseSectionHeading,
  WhyChooseSectionWrapper,
} from "./style";

import { AffordabilityImage, AuthenticImage, QualityImage, ReliabilityImage } from "@/app/assets/images/why-choose";

export function WhyChooseSection() {
  return (
    <WhyChooseSectionContainer>
      <WhyChooseSectionWrapper>
        <WhyChooseSectionHeading>
          <h1>Why choose Partzshop?</h1>
        </WhyChooseSectionHeading>

        <WhyChooseSectionContent>
          <WhyChooseCard>
            <WhyChooseCard_imageContainer>
              <Image src={QualityImage} alt="Quality image" />
            </WhyChooseCard_imageContainer>
            <WhyChooseCard_textContainer>
              <p>Quality</p>
              <span>Top quality Car Parts</span>
            </WhyChooseCard_textContainer>
          </WhyChooseCard>

          <WhyChooseCard>
            <WhyChooseCard_imageContainer>
              <Image src={AffordabilityImage} alt="Authentic image" />
            </WhyChooseCard_imageContainer>
            <WhyChooseCard_textContainer>
              <p>Affordability</p>
              <span>Affordable Car Parts</span>
            </WhyChooseCard_textContainer>
          </WhyChooseCard>

          <WhyChooseCard>
            <WhyChooseCard_imageContainer>
              <Image src={AuthenticImage} alt="Authentic image" />
            </WhyChooseCard_imageContainer>
            <WhyChooseCard_textContainer>
              <p>Tailor Made Parts</p>
              <span>Authentic Car Parts</span>
            </WhyChooseCard_textContainer>
          </WhyChooseCard>

          <WhyChooseCard>
            <WhyChooseCard_imageContainer>
              <Image src={ReliabilityImage} alt="Reliability image" />
            </WhyChooseCard_imageContainer>
            <WhyChooseCard_textContainer>
              <p>Reliabiltiy</p>
              <span>24/7 Support</span>
            </WhyChooseCard_textContainer>
          </WhyChooseCard>
        </WhyChooseSectionContent>
      </WhyChooseSectionWrapper>
    </WhyChooseSectionContainer>
  );
}
