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

export function ProductsSection() {
  return (
    <ProductSectionContainer>
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

          <StoreButton href="#">Visit Store</StoreButton>
        </ProductSectionContent>
      </ProductSectionWrapper>
    </ProductSectionContainer>
  );
}
