import Image from "next/image";
import {
  BackButton,
  BlogItem,
  BlogItem_imageContainer,
  BlogItem_textContainer,
  BlogPageContainer,
  BlogPageContent,
  BlogPageHeading,
  BlogPageWrapper,
  Blog_DateTime,
  Blog_Footer,
  Blog_Heading,
  Blog_ImageContainer,
  Blog_TextContainer,
  OtherBlogsContainer,
  OtherBlogsWrapper,
} from "./style";

import {
  ArrowLeftIcon,
  DiagonalArrowIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/app/assets/svg";
import BlogImage1 from "@/app/assets/images/blogs/blog-image-1.jpg";
import BlogImage2 from "@/app/assets/images/blogs/blog-image-2.jpg";
import BlogImage3 from "@/app/assets/images/blogs/blog-image-3.jpg";

export default function BlogPage() {
  return (
    <BlogPageContainer>
      <BlogPageWrapper>
        <BlogPageHeading>
          <BackButton>
            <Image src={ArrowLeftIcon} alt="Back Icon" />
            <span>Back</span>
          </BackButton>
        </BlogPageHeading>

        <BlogPageContent>
          <Blog_Heading>
            <Blog_DateTime>
              <span>3 mins read</span>
              <span>•</span>
              <span>February 14, 2024</span>
            </Blog_DateTime>
            <h1>How to Identify Authentic Car Parts from Fake.</h1>
          </Blog_Heading>

          <Blog_ImageContainer>
            <Image src={BlogImage1} alt="Blog Image" />
          </Blog_ImageContainer>

          <Blog_TextContainer>
            <p>
              Using authentic car parts is crucial for ensuring safety,
              performance, and longevity when maintaining your vehicle. However,
              the market is flooded with counterfeit parts that can jeopardize
              your vehicle's integrity and pose serious risks. So, how can you
              distinguish between genuine and fake car parts? We are here to
              share practical tips for identifying authentic car parts and
              avoiding counterfeit products.
            </p>

            <h2>Importance of Authentic Car Parts</h2>

            <p>
              Before dishing out tips, let's understand why using authentic car
              parts is paramount. Genuine parts are engineered to meet stringent
              quality standards set by manufacturers, ensuring compatibility,
              reliability, and optimal performance. On the other hand,
              counterfeit parts are often made from inferior materials and lack
              the precision engineering of genuine parts, leading to potential
              safety hazards, premature wear and tear, and compromised vehicle
              performance.{" "}
            </p>

            <h2>Tips for Identifying Authentic Car Parts</h2>

            <h3>1. Purchase from Reputable Suppliers:</h3>

            <p>
              Start by sourcing car parts from authorized dealerships, reputable
              auto parts stores, or certified online retailers. These
              establishments have established relationships with manufacturers
              and adhere to strict quality control measures, minimizing the risk
              of counterfeit products.
            </p>

            <h3>2. Check for Manufacturer Labels and Packaging:</h3>

            <p>
              Authentic car parts typically feature manufacturer labels, serial
              numbers, or holographic seals for verification. Inspect the
              packaging for signs of tampering, poor-quality printing, or
              misspelt brand names, as these are common indicators of
              counterfeit products.
            </p>

            <h3>3. Inspect the Quality of Materials:</h3>

            <p>
              Examine the construction and materials used in the car part for
              any signs of inferior quality or discrepancies. Genuine parts are
              often made from high-grade materials and exhibit superior
              craftsmanship, whereas counterfeit parts may appear flimsy, poorly
              finished, or mismatched in colour and texture.
            </p>

            <h3>4. Verify Product Authenticity:</h3>

            <p>
              Many mufacturers provide online tools or verification services
              that nsumers to authenticate their products using unique
              identification codes or serial numbers. Take advantage of these
              resources to confirm the authenticity of your car parts and ensure
              peace of mind.
            </p>

            <h3>5. Beware of Unbelievably Low Prices:</h3>

            <p>
              While everyone loves a good deal, extremely low prices should
              raise suspicion, especially regarding car parts. Counterfeiters
              often lure unsuspecting customers with rock-bottom prices, but
              remember, if the price seems too good to be true, it probably is.
              Invest in quality parts from trusted sources to avoid costly
              repairs or safety hazards down the road.
            </p>

            <h2>Conclusion</h2>

            <p>
              Identifying authentic car parts amidst a sea of counterfeits can
              be challenging. Still, by following these practical tips and being
              observant, you can safeguard your vehicle and yourself from
              potential risks. Remember, the safety and performance of your
              vehicle depend on the quality of the parts you choose, so
              prioritize authenticity and reliability when making purchasing
              decisions.
            </p>
            <p>
              At Partzshop, we are committed to providing our customers with
              genuine, high-quality car parts sourced from reputable
              manufacturers. With us, you can shop with confidence, knowing that
              your vehicle's integrity and performance are our top priorities.
            </p>
            <p>Stay informed, stay vigilant, and drive safely!</p>
          </Blog_TextContainer>

          <Blog_Footer>
            <span>Share Article: </span>
            <Image src={InstagramIcon} alt="instagram-icon" />
            <Image src={LinkedInIcon} alt="linkedIn-icon" />
            <Image src={XIcon} alt="x-icon" />
          </Blog_Footer>
        </BlogPageContent>
      </BlogPageWrapper>

      <OtherBlogsContainer>
        <OtherBlogsWrapper>
          <BlogItem>
            <BlogItem_imageContainer>
              <Image src={BlogImage2} alt="Blog" />
            </BlogItem_imageContainer>
            <BlogItem_textContainer>
              <span>3 minutes read - 17 Jan 2024</span>
              <h2>
                Tyre Rotation: Your Ultimate Guide to Maximizing Tyre Lifespan{" "}
                <Image
                  src={DiagonalArrowIcon}
                  alt="Blog link"
                  width={16}
                  height={40}
                />
              </h2>
              <p>
                Regular tyre rotation is a crucial aspect of vehicle maintenance
                that often gets overlooked.
              </p>
            </BlogItem_textContainer>
          </BlogItem>
          <BlogItem>
            <BlogItem_imageContainer>
              <Image src={BlogImage3} alt="Blog" />
            </BlogItem_imageContainer>
            <BlogItem_textContainer>
              <span>3 minutes read - 17 Jan 2024</span>
              <h2>
                Everything You Need to Know About PMS Engines{" "}
                <Image
                  src={DiagonalArrowIcon}
                  alt="Blog link"
                  width={16}
                  height={40}
                />
              </h2>
              <p>
                Preventive Maintenance Service (PMS) keeps your vehicle running
                smoothly and efficiently.
              </p>
            </BlogItem_textContainer>
          </BlogItem>
        </OtherBlogsWrapper>
      </OtherBlogsContainer>
    </BlogPageContainer>
  );
}
