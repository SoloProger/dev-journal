import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRecentPosts } from "@store/blog/postSlice";
import MainTitle from "@components/main/main-title/MainTitle";
import RecentPost from "@components/main/recent-post/RecentPost";
import Loading from "@ui/loading/Loading"

export default function Main() {
  const recentPosts = useSelector((state) => state.post.recentPosts);
  const loading = useSelector((state) => state.post.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecentPosts());
  }, [dispatch]);

  return (
    <main className="w-full flex flex-col gap-40 mb-20">
      <MainTitle />
      {loading ? <Loading /> : <RecentPost recentPosts={recentPosts} />}
    </main>
  );
}
