import Image from "next/image";
import { BlogCard, BlogCard_imageContainer, BlogCard_textContainer, BlogSectionContainer, BlogSectionContent, BlogSectionHeading, BlogSectionWrapper } from "./style";

import ChevronRightIcon from "@/app/assets/svg/chevron-right.svg";
import DiagonalArrowIcon from "@/app/assets/svg/diagonal-arrow.svg";

import BlogImage1 from "@/app/assets/images/blogs/blog-image-1.jpg";
import BlogImage2 from "@/app/assets/images/blogs/blog-image-2.jpg";
import BlogImage3 from "@/app/assets/images/blogs/blog-image-3.jpg";

export function BlogSection(){
    return <BlogSectionContainer>
        <BlogSectionWrapper>
            <BlogSectionHeading>
                <h1>Our Blog</h1>
                <a href="/blogs">View all <Image src={ChevronRightIcon} alt="view all"/> </a>
            </BlogSectionHeading>

            <BlogSectionContent>
                <BlogCard href="/blogs/authentic-car-parts">
                    <BlogCard_imageContainer>
                        <Image src={BlogImage1} alt="Blog" />
                    </BlogCard_imageContainer>
                    <BlogCard_textContainer>
                        <span>3 minutes read - 17 Jan 2024</span>
                        <h2>How to Identify Authentic Car Parts from Fake <Image src={DiagonalArrowIcon} alt="Blog link" width={16} height={40} /></h2>
                        <p>Using authentic car parts is crucial for ensuring safety, performance, and longevity when maintaining your vehicle.</p>
                    </BlogCard_textContainer>
                </BlogCard>
                <BlogCard>
                    <BlogCard_imageContainer>
                        <Image src={BlogImage2} alt="Blog" />
                    </BlogCard_imageContainer>
                    <BlogCard_textContainer>
                        <span>3 minutes read - 17 Jan 2024</span>
                        <h2>Tyre Rotation: Your Ultimate Guide to Maximizing Tyre Lifespan <Image src={DiagonalArrowIcon} alt="Blog link" width={16} height={40} /></h2>
                        <p>Regular tyre rotation is a crucial aspect of vehicle maintenance that often gets overlooked.</p>
                    </BlogCard_textContainer>
                </BlogCard>
                <BlogCard>
                    <BlogCard_imageContainer>
                        <Image src={BlogImage3} alt="Blog" />
                    </BlogCard_imageContainer>
                    <BlogCard_textContainer>
                        <span>3 minutes read - 17 Jan 2024</span>
                        <h2>Everything You Need to Know About PMS Engines <Image src={DiagonalArrowIcon} alt="Blog link" width={16} height={40} /></h2>
                        <p>Preventive Maintenance Service (PMS) keeps your vehicle running smoothly and efficiently.</p>
                    </BlogCard_textContainer>
                </BlogCard>
            </BlogSectionContent>
        </BlogSectionWrapper>
    </BlogSectionContainer>
}