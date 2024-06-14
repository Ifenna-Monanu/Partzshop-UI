import Image from "next/image";
import {HowItWorksSectionContainer, HowItWorksSectionWrapper, ImageWrapper, StepItem, StepLists, TextContentHeading, TextContentWrapper} from "./style";

import HowItWorksImage from "@/app/assets/images/how-it-works.png";
import ChatOnWhatsappImage from "@/app/assets/images/how-it-works/chat-on-whatsapp.png";
import PlaceOrderImage from "@/app/assets/images/how-it-works/place-order.png";
import MakePaymentImage from "@/app/assets/images/how-it-works/make-payment.png";
import OrdersDeliveredImage from "@/app/assets/images/how-it-works/orders-delivered.png";


export function HowItWorksSection(){
    return <HowItWorksSectionContainer>
        <HowItWorksSectionWrapper>
            <TextContentWrapper>
                <TextContentHeading>
                    <span>How it works</span>
                    <h1>It's easy to shop on Partzshop</h1>
                    <p>Start shopping for quality car parts by simply following these 4 easy steps.</p>
                </TextContentHeading>
                <StepLists>
                    <StepItem>
                        <Image src={ChatOnWhatsappImage} alt="chat on whatsapp"/>
                        <p>Say Hi on WhatsApp</p>
                    </StepItem>
                    <StepItem>
                        <Image src={PlaceOrderImage} alt="Place your order"/>
                        <p>Place your order</p>
                    </StepItem>
                    <StepItem>
                        <Image src={MakePaymentImage} alt="make payment"/>
                        <p>Make Payment</p>
                    </StepItem>
                    <StepItem>
                        <Image src={OrdersDeliveredImage} alt="orders delivered"/>
                        <p>Have your order delivered to you</p>
                    </StepItem>
                </StepLists>
            </TextContentWrapper>
            <ImageWrapper>
                <Image src={HowItWorksImage} alt="How it works image"/>
            </ImageWrapper>
        </HowItWorksSectionWrapper>
    </HowItWorksSectionContainer>
}