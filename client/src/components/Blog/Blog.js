import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import BlogPost from "../BlogPost/BlogPost";
import { useGetBlogPosts } from "../../hooks/getBlogPost.hook";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

import s from "./Blog.module.scss";

export default function Blog() {
  const { blogList, loadingBlog } = useGetBlogPosts();

  return (
    <section className={`${s.blog} ${s.blog__wrapper}`}>
      <SectionTitle title={"blog"} />
      <ul className={s.blog__list}>
        {Array.isArray(blogList) && blogList.length !== 0 && !loadingBlog ? (
          blogList.map((item) => {
            return (
              <BlogPost
                title={item.title}
                subtitle={item.subtitle}
                body_text={item.body_text}
                date_creation={item.date_creation}
                image_path={item.image_path}
                key={item._id}
              />
            );
          })
        ) : (
          <LoadingSpinner />
        )}
      </ul>
    </section>
  );
}
