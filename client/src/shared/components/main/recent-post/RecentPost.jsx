import React from "react";
import { Link } from "react-router-dom";
import Card from "@components/card/Card";

export default function RecentPost({ recentPosts }) {
  return (
    <section className="flex flex-col py-7 px-36 gap-5">
      <span className="flex items-center justify-between p-6">
        <h5>Последние посты</h5>
        <Link to="/blog">Посмотреть все</Link>
      </span>
      <div className="flex gap-5">
        {recentPosts.map(({ title, description, date, tag }) => (
          <Card title={title} description={description} date={date} tag={tag} />
        ))}
      </div>
    </section>
  );
}
