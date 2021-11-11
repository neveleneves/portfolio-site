import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogList } from "../redux/action/blogActions";

export const useGetBlogPosts = () => {
  const dispatch = useDispatch();
  const { blogList, loadingBlog } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogList());
  }, []);

  return { blogList, loadingBlog };
};
