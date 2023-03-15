import React from "react";
import MainTitle from "../shared/components/main/main-title/MainTitle";
import RecentPost from "../shared/components/main/recent-post/RecentPost";

export default function Main() {
  return (
    <main className="w-full flex flex-col gap-40 mb-20">
      <MainTitle />
      <RecentPost />
    </main>
  );
}
