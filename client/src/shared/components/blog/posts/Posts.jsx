import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "@components/card/Card";

export default function Posts({ posts, editAction, removeAction }) {
  const navigate = useNavigate();
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
          toPost={() => navigate(`post/${id}`)}
        />
      ))}
    </section>
  );
}
