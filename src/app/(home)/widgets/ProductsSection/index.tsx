import { useState } from "react";
import Image from "next/image";
import {
  ProductSectionHeading,
  ProductSectionContainer,
  ProductSectionWrapper,
  ProductSectionContent,
  ProductCardWrapper,
  ProductCard,
  ProductCard_imageContainer,
  StoreButton,
} from "./style";

import {
  AutoCareImage,
  BrakePartsImage,
  EngineOilImage,
  EnginePartsImage,
  FiltersImage,
  SuspensionPartsImage,
} from "@/app/assets/images/products/";
import WhatsappConfig from "@/util/whatsapp.config";
import WhatsappModal from "@/app/ui/whatsapp-modal";
import Button from "@/app/ui/button";

export function ProductsSection() {
  const [whatsappModal, setWhatsappModal] = useState(false);
  return (
    <ProductSectionContainer data-aos="fade-right" id="products">
      <ProductSectionWrapper>
        <ProductSectionHeading>
          <span>Our Products</span>
          <h1>Browse by category</h1>
        </ProductSectionHeading>

        <ProductSectionContent>
          <ProductCardWrapper>
            <ProductCard>
              <ProductCard_imageContainer>
                <Image src={BrakePartsImage} alt="product" />
              </ProductCard_imageContainer>
              <p>Brake parts</p>
            </ProductCard>
            <ProductCard>
              <ProductCard_imageContainer>
                <Image src={SuspensionPartsImage} alt="product" />
              </ProductCard_imageContainer>
              <p>Suspension parts</p>
            </ProductCard>
            <ProductCard>
              <ProductCard_imageContainer>
                <Image src={EnginePartsImage} alt="product" />
              </ProductCard_imageContainer>
              <p>Engine parts</p>
            </ProductCard>
            <ProductCard>
              <ProductCard_imageContainer>
                <Image src={EngineOilImage} alt="product" />
              </ProductCard_imageContainer>
              <p>Engine Oil &amp; Other Fluids</p>
            </ProductCard>
            <ProductCard>
              <ProductCard_imageContainer>
                <Image src={AutoCareImage} alt="product" />
              </ProductCard_imageContainer>
              <p>Auto Care Products</p>
            </ProductCard>
            <ProductCard>
              <ProductCard_imageContainer>
                <Image src={FiltersImage} alt="product" />
              </ProductCard_imageContainer>
              <p>Filters</p>
            </ProductCard>
          </ProductCardWrapper>

          <Button
            style={{ padding: ".75rem 3rem" }}
            btnType="secondary"
            onClick={() => setWhatsappModal(true)}
          >
            Visit Store
          </Button>
        </ProductSectionContent>
      </ProductSectionWrapper>

      {/* Whatsapp Modal */}
      <WhatsappModal
        openState={whatsappModal}
        closeAction={() => setWhatsappModal(false)}
      />
    </ProductSectionContainer>
  );
}
