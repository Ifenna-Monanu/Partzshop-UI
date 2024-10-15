import Image from "next/image";
import moment from "moment";

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

import DiagonalArrowIcon from "@/app/assets/svg/diagonal-arrow.svg";

import { GetAllBlogs } from "@/app/assets/data/blog";

export default function BlogsPage() {
  const blogList = GetAllBlogs();

  function setBlogDate(date: string): string {
    return moment(date).format("D MMM YYYY");
  }

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
            {blogList.map((blog, index) => (
              <BlogItem href={`/blogs/${blog.id}`} key={index} target="_blank">
                <BlogItem_imageContainer>
                  <Image
                    src={`/blogs/${blog.image}`}
                    alt={blog.title}
                    width={500}
                    height={500}
                  />
                </BlogItem_imageContainer>
                <BlogItem_textContainer>
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
                </BlogItem_textContainer>
              </BlogItem>
            ))}
          </BlogsWrapper>
        </BlogsPageContent>
      </BlogsPageWrapper>
    </BlogsPageContainer>
  );
}
