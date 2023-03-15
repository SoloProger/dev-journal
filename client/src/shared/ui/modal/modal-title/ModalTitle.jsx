import React from "react";
import PropTypes from "prop-types";

export default function ModalTitle({ title }) {
  return <div className="p-3 font-bold text-lg">{title}</div>;
}

ModalTitle.propTypes = {
  title: PropTypes.string,
};
