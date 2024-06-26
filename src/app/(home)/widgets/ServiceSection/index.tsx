import Image from "next/image";
import {
  ServiceCard,
  ServiceImageContainer,
  ServiceSectionContainer,
  ServiceSectionContent,
  ServiceSectionHeading,
  ServiceSectionWrapper,
} from "./style";

import {
  AutoSourcingImage,
  LogisticsImage,
  MechanicsImage,
} from "@/app/assets/images/services";

export function ServiceSection() {
  return (
    <ServiceSectionContainer>
      <ServiceSectionWrapper>
        <ServiceSectionHeading>
          <span>Our Services</span>
          <h1>What we do</h1>
        </ServiceSectionHeading>
        <ServiceSectionContent>
          <ServiceCard>
            <ServiceImageContainer>
              <Image src={AutoSourcingImage} alt="Auto Parts Sourcing" />
            </ServiceImageContainer>
            <p>Auto Parts Sourcing</p>
          </ServiceCard>
          <ServiceCard>
            <ServiceImageContainer>
              <Image src={MechanicsImage} alt="Mechanics" />
            </ServiceImageContainer>
            <p>Mechanics</p>
          </ServiceCard>
          <ServiceCard>
            <ServiceImageContainer>
              <Image src={LogisticsImage} alt="Logistics" />
            </ServiceImageContainer>
            <p>Logisitics</p>
          </ServiceCard>
        </ServiceSectionContent>
      </ServiceSectionWrapper>
    </ServiceSectionContainer>
  );
}
