import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Posts from "@components/blog/posts/Posts";
import AddPost from "@components/blog/forms/add-post/AddPost";
import Button from "@ui/button/Button";
import Modal from "@ui/modal/Modal";
import Loading from "@ui/loading/Loading";
import {
  loadPost,
  addNewPost,
  removePost,
  editCurrentPost,
} from "@store/blog/postSlice";
import { useClearValue } from "@hooks/useClearValue";

export default function Blog() {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [postId, setPostId] = useState(null);

  const posts = useSelector((state) => state.post.posts);
  const loading = useSelector((state) => state.post.loading);
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

  const editFormSubmit = (event) => {
    event.preventDefault();
    const post = {
      id: postId,
      title: inputValue,
      description: textareaValue,
    };
    dispatch(editCurrentPost(post));
    setClear.map((fn) => fn(""));
    setOpenEdit(false);
  };

  const setEditFormValue = (post) => {
    setOpenEdit(true);
    setInputValue(post.title);
    setTextareaValue(post.description);
    setPostId(post.id);
  };

  const _removePost = (postId) => {
    dispatch(removePost(postId));
  };

  useEffect(() => {
    dispatch(loadPost());
  }, [dispatch]);

  return (
    <main className="w-full flex flex-col max-w-4xl m-auto">
      <div className="flex items-center justify-between mb-20">
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
      {openEdit && (
        <Modal title="Редактировать пост" setOpen={setOpenEdit}>
          <AddPost
            submit={editFormSubmit}
            inputState={inputValue}
            inputChange={(event) => setInputValue(event.target.value)}
            textAreaState={textareaValue}
            textAreaChange={(event) => setTextareaValue(event.target.value)}
            firstButtonText="Сохранить"
            secondButtonText="Отмена"
            secondButtonAction={() => setOpenEdit(false)}
            firstButtonType="submit"
          />
        </Modal>
      )}
      {loading ? (
        <Loading />
      ) : (
        <Posts
          posts={posts}
          editAction={setEditFormValue}
          removeAction={_removePost}
        />
      )}
    </main>
  );
}
