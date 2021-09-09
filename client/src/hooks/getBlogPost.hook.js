import { useState, useEffect } from "react";

export const useGetBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    let isCancelled = false;

    const getBlogPosts = async () => {
      try {
        if (!isCancelled) {
          const response = await fetch(`/api/main/posts`, {
            method: "GET",
          });
          const blogPostsList = await response.json();

          if (!response.ok) {
            throw new Error(
              blogPostsList.message || "The request was executed incorrectly"
            );
          }

          if (blogPostsList.length) setBlogPosts(blogPostsList);
        }
      } catch (e) {
        console.warn("The request was executed incorrectly: ", e.message);
      }
    };
    getBlogPosts();

    return () => {
      isCancelled = true;
    };
  }, []);

  return { blogPosts };
};
