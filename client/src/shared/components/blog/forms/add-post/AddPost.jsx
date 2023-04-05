import React from "react";
import PropTypes from "prop-types";
import Input from "@ui/input/Input";
import Textarea from "@ui/textarea/Textarea";
import Button from "@ui/button/Button";

export default function AddPost({
  submit,
  inputState,
  textAreaState,
  inputChange,
  textAreaChange,
  firstButtonText,
  secondButtonText,
  firstButtonAction,
  secondButtonAction,
  firstButtonType,
  secondButtonType,
  formControls,
  children,
}) {
  return (
    <form className="flex flex-col justify-center gap-4" onSubmit={submit}>
      <Input
        type="text"
        labelText="Заголовок поста"
        value={inputState}
        onChange={inputChange}
      />
      <Textarea
        type="text"
        labelText="Краткое описание"
        value={textAreaState}
        onChange={textAreaChange}
      />
      {formControls &&
        formControls.map((control, idx) => (
          <span className="flex w-full flex-col justify-center gap-4" key={idx}>
            <Input
              type="text"
              labelText="Загаловок абзаца"
              value={control.title}
              onChange={inputChange}
            />
            <Textarea
              type="text"
              labelText="Контент"
              value={control.description}
              onChange={textAreaChange}
            />
          </span>
        ))}
      {children}
      <div className="flex items-center justify-end gap-3">
        <Button
          animateOff={true}
          text={firstButtonText}
          onClick={firstButtonAction}
          type={firstButtonType ?? "text"}
        />
        <Button
          animateOff={true}
          text={secondButtonText}
          onClick={secondButtonAction}
          type={secondButtonType ?? "text"}
        />
      </div>
    </form>
  );
}

AddPost.propTypes = {
  submit: function () {},
  inputState: PropTypes.string,
  textAreaState: PropTypes.string,
  inputChange: function () {},
  textAreaChange: function () {},
};
