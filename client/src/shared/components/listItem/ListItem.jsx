import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.css";

export default function ListItem({ children }) {
  return <li className={styles.item}>{children}</li>;
}

ListItem.propTypes = {
  children: PropTypes.element,
};
