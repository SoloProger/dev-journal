import React from "react";

import Card from "@components/card/Card";

export default function Posts({ posts, editAction, removeAction }) {
  return (
    <section>
      {posts.map(({ id, title, description, date, tag }) => (
        <Card
          title={title}
          description={description}
          date={date}
          tag={tag}
          extraStyles="border-x"
          isDefiner={true}
          withAction={true}
          editAction={() => editAction({ title, description, date, tag })}
          removeAction={() => removeAction(id)}
        />
      ))}
    </section>
  );
}
