import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainTitle from "@components/main/main-title/MainTitle";
import RecentPost from "@components/main/recent-post/RecentPost";
import { loadRecentPosts } from "@store/blog/postSlice";

export default function Main() {
  const recentPosts = useSelector((state) => state.post.recentPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecentPosts());
  }, [dispatch]);

  return (
    <main className="w-full flex flex-col gap-40 mb-20">
      <MainTitle />
      <RecentPost recentPosts={recentPosts} />
    </main>
  );
}
