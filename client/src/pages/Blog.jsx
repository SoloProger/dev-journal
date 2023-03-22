import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Posts from "@components/blog/posts/Posts";
import AddPost from "@components/blog/forms/add-post/AddPost";
import Button from "@ui/button/Button";
import Modal from "@ui/modal/Modal";
import { loadPost, addNewPost, removePost } from "@store/blog/postSlice";
import { useClearValue } from "@hooks/useClearValue";

export default function Blog() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  const setClear = useClearValue(setInputValue, setTextareaValue);

  const formSubmit = (event) => {
    event.preventDefault();
    const post = {
      title: inputValue,
      description: textareaValue,
    };
    dispatch(addNewPost(post));
    setClear.map((fn) => fn(""));
    setOpen(false);
  };

  const editForm = (post) => {
    setInputValue(post.title);
    setTextareaValue(post.description);
    setOpen(true);
  };

  const _removePost = (postId) => {
    dispatch(removePost(postId));
  };

  useEffect(() => {
    dispatch(loadPost());
  }, [dispatch]);

  return (
    <main className="w-full flex flex-col max-w-4xl m-auto">
      <div className="p-6 flex items-center justify-between">
        <h1 className="font-bold text-5xl">Блог</h1>
        <Button text="Добавить" onClick={() => setOpen(true)} />
      </div>
      {open && (
        <Modal title="Добавить пост" setOpen={setOpen}>
          <AddPost
            submit={formSubmit}
            inputState={inputValue}
            inputChange={(event) => setInputValue(event.target.value)}
            textAreaState={textareaValue}
            textAreaChange={(event) => setTextareaValue(event.target.value)}
            firstButtonText="Добавить"
            secondButtonText="Отмена"
            secondButtonAction={() => setOpen(false)}
            firstButtonType="submit"
          />
        </Modal>
      )}
      <Posts posts={posts} editAction={editForm} removeAction={_removePost} />
    </main>
  );
}
