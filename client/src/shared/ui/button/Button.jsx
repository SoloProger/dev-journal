import React from "react";
import PropType from "prop-types";
import styles from "./Button.module.css";

export default function Button({ text, action, animateOff, ...props }) {
  return (
    <button
      className={animateOff ? "" : styles.draw}
      {...props}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropType.string,
  withAnimate: PropType.bool,
  action: function () {},
};
