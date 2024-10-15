import { useMemo, useState } from "react";
import {
  AccordionItem,
  AccordionItem_content,
  AccordionItem_header,
  FaqSectionContainer,
  FaqSectionContent,
  FaqSectionHeading,
  FaqSectionWrapper,
} from "./style";

export function FaqSection() {
  const faq_list = useMemo(
    () => [
      {
        title: "What service does Partzshop offer?",
      },
      {
        title: "How can I place an order for car parts?",
      },
      {
        title: "Do you offer installation services for the parts purchased?",
      },
      {
        title: "What types of vehicles do you cater to?",
      },
      {
        title: "How long does shipping take for ordered parts?",
      },
      {
        title: "Are there any discounts or promotions available?",
      },
      {
        title: "How can I contact Partzshop for further assistance?",
      },
    ],
    [],
  );

  return (
    <FaqSectionContainer>
      <FaqSectionWrapper>
        <FaqSectionHeading>
          <span>FAQ</span>
          <h1>
            You have questions, <br />
            we have answers.{" "}
          </h1>
          <p>Not seeing the answers you are looking for here?</p>
          <a href="/contact/">Contact us</a>
        </FaqSectionHeading>
        <FaqSectionContent>
          {faq_list.map((faqItem, index) => (
            <Accordion key={index} title={faqItem.title}></Accordion>
          ))}
        </FaqSectionContent>
      </FaqSectionWrapper>
    </FaqSectionContainer>
  );
}

function Accordion({ title = "", summary = "" }) {
  const [active, setActive] = useState(false);
  return (
    <AccordionItem>
      <AccordionItem_header $active={active} onClick={() => setActive(!active)}>
        <p>{title}</p>
      </AccordionItem_header>
      <AccordionItem_content $active={active}>
        <p>{summary}</p>
      </AccordionItem_content>
    </AccordionItem>
  );
}
