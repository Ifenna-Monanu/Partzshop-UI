"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import moment from "moment";
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
import { GetAllBlogs, GetBlog, IBlog } from "@/app/assets/data/blog";

export default function BlogPage() {
  const params = useParams<{ blogId: string }>();

  const [activeBlog, setActiveBlog] = useState<IBlog>({
    date: "",
    fullTextHtml: "",
    id: "",
    minutes: "",
    overview: "",
    title: "",
  });

  const blogList = GetAllBlogs();

  function setBlogDate(date:string):string{
    return moment(date).format("MMMM D, YYYY")
  }

  useEffect(() => {
    const blog = GetBlog(params.blogId) ?? {
      date: "",
      fullTextHtml: "",
      id: "",
      minutes: "",
      overview: "",
      title: "",
    };
    setActiveBlog(blog);
    return;
  }, [params.blogId]);
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
            {(activeBlog.date) && <Blog_DateTime>
              <span>{activeBlog?.minutes} mins read</span>
              <span>•</span>
              <span>{setBlogDate(activeBlog?.date)}</span>
            </Blog_DateTime>}
            <h1>{activeBlog?.title}</h1>
          </Blog_Heading>

          <Blog_ImageContainer>
            <Image
              src={`/blogs/${activeBlog.image}`}
              alt={activeBlog.title}
              width={500}
              height={600}
              priority
            />
          </Blog_ImageContainer>

          <Blog_TextContainer
            dangerouslySetInnerHTML={{ __html: activeBlog?.fullTextHtml }}
          ></Blog_TextContainer>

          <Blog_Footer>
            <span>Share Article: </span>
            <Image src={InstagramIcon} alt="instagram-icon" />
            <Image src={LinkedInIcon} alt="linkedIn-icon" />
            <Image src={XIcon} alt="x-icon" />
          </Blog_Footer>
        </BlogPageContent>
      </BlogPageWrapper>

      <OtherBlogsContainer>
        <h2>Other Articles</h2>
        <OtherBlogsWrapper>
          {blogList.map(
            (blog, index) =>
              blog.id !== activeBlog.id && (
                <BlogItem href={`/blogs/${blog.id}`} key={index}>
                  <BlogItem_imageContainer>
                    <Image
                      src={`/blogs/${blog.image}`}
                      width={700}
                      height={700}
                      alt={blog.title}
                      priority
                    />
                  </BlogItem_imageContainer>
                  <BlogItem_textContainer>
                    <span>
                      {blog.minutes} minutes read - {blog.date}
                    </span>
                    <h2>
                      {blog.title}{" "}
                      <Image
                        src={DiagonalArrowIcon}
                        alt="Blog link"
                        width={16}
                        height={32}
                      />
                    </h2>
                    <p>{blog.overview}</p>
                  </BlogItem_textContainer>
                </BlogItem>
              )
          )}
        </OtherBlogsWrapper>
      </OtherBlogsContainer>
    </BlogPageContainer>
  );
}
