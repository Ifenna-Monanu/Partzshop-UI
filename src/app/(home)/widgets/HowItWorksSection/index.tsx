import Image from "next/image";
import {
  HowItWorksSectionContainer,
  HowItWorksSectionWrapper,
  ImageWrapper,
  StepItem,
  StepLists,
  TextContentHeading,
  TextContentWrapper,
} from "./style";

import HowItWorksImage from "@/app/assets/images/how-it-works.png";

import {
  ChatOnWhatsappIcon,
  PlaceOrderIcon,
  MakePaymentIcon,
  OrderDeliveredIcon,
} from "@/app/assets/svg";

export function HowItWorksSection() {
  return (
    <HowItWorksSectionContainer>
      <HowItWorksSectionWrapper>
        <TextContentWrapper data-aos="fade-right">
          <TextContentHeading>
            <span>How it works</span>
            <h1>It is easy to shop on Partzshop</h1>
            <p>
              Start shopping for quality car parts by simply following these 4
              easy steps.
            </p>
          </TextContentHeading>
          <StepLists>
            <StepItem>
              <Image src={ChatOnWhatsappIcon} alt="chat on whatsapp" />
              <p>Say Hi on WhatsApp</p>
            </StepItem>
            <StepItem>
              <Image src={PlaceOrderIcon} alt="Place your order" />
              <p>Place your order</p>
            </StepItem>
            <StepItem>
              <Image src={MakePaymentIcon} alt="make payment" />
              <p>Make Payment</p>
            </StepItem>
            <StepItem>
              <Image src={OrderDeliveredIcon} alt="orders delivered" />
              <p>Have your order delivered to you</p>
            </StepItem>
          </StepLists>
        </TextContentWrapper>
        <ImageWrapper data-aos="fade-left">
          <Image src={HowItWorksImage} alt="How it works image" />
        </ImageWrapper>
      </HowItWorksSectionWrapper>
    </HowItWorksSectionContainer>
  );
}
