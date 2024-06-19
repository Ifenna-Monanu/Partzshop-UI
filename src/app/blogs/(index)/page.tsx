import Image from "next/image";
import {
  BlogItem,
  BlogItem_imageContainer,
  BlogItem_textContainer,
  BlogsPageContainer,
  BlogsPageContent,
  BlogsPageHeading,
  BlogsPageWrapper,
  BlogsWrapper,
} from "./style";

import ChevronRightIcon from "@/app/assets/svg/chevron-right.svg";
import DiagonalArrowIcon from "@/app/assets/svg/diagonal-arrow.svg";

import BlogImage1 from "@/app/assets/images/blogs/blog-image-1.jpg";
import BlogImage2 from "@/app/assets/images/blogs/blog-image-2.jpg";
import BlogImage3 from "@/app/assets/images/blogs/blog-image-3.jpg";

export default function BlogsPage() {
  return (
    <BlogsPageContainer>
      <BlogsPageWrapper>
        <BlogsPageHeading>
          <span>Our Blog</span>
          <h1>Articles, Stories and Posts</h1>
          <p>Don&apos;t just take our word for it.</p>
        </BlogsPageHeading>

        <BlogsPageContent>
          <h2>Recent Blogs</h2>
          <BlogsWrapper>
            <BlogItem href="/blogs/authentic-car-parts">
              <BlogItem_imageContainer>
                <Image src={BlogImage1} alt="Blog Image" />
              </BlogItem_imageContainer>
              <BlogItem_textContainer>
                <span>3 minutes read - 17 Jan 2024</span>
                <h2>
                  How to Identify Authentic Car Parts from Fake{" "}
                  <Image
                    src={DiagonalArrowIcon}
                    alt="Blog link"
                    width={16}
                    height={40}
                  />
                </h2>
                <p>
                  Using authentic car parts is crucial for ensuring safety,
                  performance, and longevity when maintaining your vehicle.
                </p>
              </BlogItem_textContainer>
            </BlogItem>
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
                  Regular tyre rotation is a crucial aspect of vehicle
                  maintenance that often gets overlooked.
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
                  Preventive Maintenance Service (PMS) keeps your vehicle
                  running smoothly and efficiently.
                </p>
              </BlogItem_textContainer>
            </BlogItem>
          </BlogsWrapper>
        </BlogsPageContent>
      </BlogsPageWrapper>
    </BlogsPageContainer>
  );
}
