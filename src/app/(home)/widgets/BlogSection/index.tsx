import Image from "next/image";
import moment from "moment";
import {
  BlogCard,
  BlogCard_imageContainer,
  BlogCard_textContainer,
  BlogSectionContainer,
  BlogSectionContent,
  BlogSectionHeading,
  BlogSectionWrapper,
} from "./style";

import ChevronRightIcon from "@/app/assets/svg/chevron-right.svg";
import DiagonalArrowIcon from "@/app/assets/svg/diagonal-arrow.svg";
import { GetAllBlogs } from "@/app/assets/data/blog";

export function BlogSection() {
  const blogList = GetAllBlogs();

  function setBlogDate(date: string): string {
    return moment(date).format("D MMM YYYY");
  }
  return (
    <BlogSectionContainer>
      <BlogSectionWrapper>
        <BlogSectionHeading>
          <h1>Our Blog</h1>
          <a href="/blogs">
            View all <Image src={ChevronRightIcon} alt="view all" />{" "}
          </a>
        </BlogSectionHeading>

        <BlogSectionContent>
          {blogList.map((blog, index) => (
            <BlogCard href={`/blogs/${blog.id}`} key={index} target="_blank">
              <BlogCard_imageContainer>
                <Image
                  src={`/blogs/${blog.image}`}
                  alt={blog.title}
                  width={500}
                  height={500}
                />
              </BlogCard_imageContainer>
              <BlogCard_textContainer>
                <span>
                  {blog.minutes} minutes read - {setBlogDate(blog.date)}
                </span>
                <h2>
                  {blog.title}{" "}
                  <Image
                    src={DiagonalArrowIcon}
                    alt="Blog link"
                    width={16}
                    height={30}
                  />
                </h2>
                <p>{blog.overview}</p>
              </BlogCard_textContainer>
            </BlogCard>
          ))}
        </BlogSectionContent>
      </BlogSectionWrapper>
    </BlogSectionContainer>
  );
}
