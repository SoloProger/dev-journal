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
          editAction={(event) =>
            editAction({ id, title, description, date, tag, event })
          }
          removeAction={() => removeAction(id)}
        />
      ))}
    </section>
  );
}
