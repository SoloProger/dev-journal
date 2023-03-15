import React from "react";

import Card from "@components/card/Card";

export default function Posts({ posts }) {
  return (
    <section>
      {posts.map(({ title, description, date, tag }) => (
        <Card
          title={title}
          description={description}
          date={date}
          tag={tag}
          extraStyles="border-x"
          isDefiner={true}
          withAction={true}
        />
      ))}
    </section>
  );
}
