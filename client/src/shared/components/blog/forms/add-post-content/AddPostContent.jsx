import React, { useState, useRef } from "react";
import Input from "@ui/input/Input";
import Textarea from "@ui/textarea/Textarea";
import Button from "@ui/button/Button";

export default function AddPostContent({ getControls }) {
  const [toggle, setToggle] = useState(false);
  const [formValues, setFormValues] = useState([]);

  const inputRef = useRef();
  const textareaRef = useRef();

  const handleParagraph = (event) => {
    event.preventDefault();
    const values = [...formValues];
    values.push({
      title: inputRef.current.value,
      description: textareaRef.current.value,
    });
    setFormValues(values);
    getControls(values);
    setToggle(false);
  };

  const addNewParagraph = (event) => {
    event.preventDefault();
    setToggle(true);
  };

  return (
    <section className="flex items-center w-full gap-2">
      {!toggle ? (
        <Button
          text="Добавить абзац"
          animateOff="true"
          onClick={addNewParagraph}
        />
      ) : (
        <>
          <div className="w-full">
            <Input
              type="text"
              labelText="Загаловок абзаца"
              inputRef={inputRef}
            />
            <Textarea
              type="text"
              labelText="Контент"
              textareaRef={textareaRef}
            />
          </div>
          <div className="flex flex-col">
            <Button
              text="Подтвердить"
              animateOff="true"
              onClick={handleParagraph}
            />
          </div>
        </>
      )}
    </section>
  );
}
