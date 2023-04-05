import React, { useEffect, useState } from "react";
import { useLoadData } from "@/shared/hooks/useLoadData";
import useApi from "@/shared/hooks/useApi";
import PostApi from "@api/post.api";
import { useParams } from "react-router-dom";
import PostHeader from "@components/post/post-header/PostHeader";
import PostContent from "@components/post/post-content/PostContent";

export default function Post() {
  const params = useParams();
  const [post, setPost] = useState({});

  const api = useApi(PostApi);

  const [loadPostById, isLoading, error] = useLoadData(async () => {
    const response = await api.getPostById(params.postId);
    setPost(response);
  });

  useEffect(() => {
    loadPostById();
  }, []);

  return (
    <main className="w-full  max-w-4xl m-auto p-6 flex flex-col gap-10 justify-center">
      <PostHeader title={post?.title} description={post?.description} />
      <PostContent />
    </main>
  );
}
