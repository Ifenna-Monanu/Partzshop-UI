import { FaqSectionContainer, FaqSectionHeading, FaqSectionWrapper } from "./style";

export function FaqSection(){
    return <FaqSectionContainer>
        <FaqSectionWrapper>
            <FaqSectionHeading>
                <span>FAQ</span>
                <h1>You have questions, <br/>we have answers. </h1>
                <p>Not seeing the answers you're looking for here?</p>
                <a>Contact us</a>
            </FaqSectionHeading>
        </FaqSectionWrapper>
    </FaqSectionContainer>
}