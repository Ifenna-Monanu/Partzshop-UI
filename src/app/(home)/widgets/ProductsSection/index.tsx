import Image from "next/image";
import { ProductSectionHeading, ProductSectionContainer, ProductSectionWrapper, ProductSectionContent, ProductCardWrapper, ProductCard, ProductCard_imageContainer, StoreButton } from "./style";

import BrakePartsImage from "@/app/assets/images/products/brake-parts.jpg";
import SuspensionPartsImage from "@/app/assets/images/products/suspension-parts.jpg";
import EnginePartsImage from "@/app/assets/images/products/engine-parts.jpg";
import EngineOilImage from "@/app/assets/images/products/engine-oil.jpg";
import AutoCareImage from "@/app/assets/images/products/auto-care.jpg";
import FiltersImage from "@/app/assets/images/products/filters.jpg";

export function ProductsSection() {
    return <ProductSectionContainer>
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
}