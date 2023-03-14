import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import Button from "../../ui/button/Button";

export default function Card({
  title,
  date,
  tag,
  description,
  extraStyles = "",
  isDefiner = false,
  withAction = false,
}) {
  return (
    <div className={`flex flex-col bg-white gap-8 p-6 w-full ${extraStyles}`}>
      <span className="flex items-center justify-between">
        <h3 className="font-bold text-2xl">{title}</h3>
        {withAction && (
          <span className="flex items-center gap-3">
            <Button text="Редактировать" />
            <Button text="Удалить" />
          </span>
        )}
      </span>
      {date || tag ? (
        <div className="flex gap-7">
          {date && <span className={styles.date}>{date}</span>}
          {tag && <span>{tag}</span>}
        </div>
      ) : (
        ""
      )}
      {description ? <p>{description}</p> : <p>Описание</p>}
      {isDefiner && <hr />}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  tag: PropTypes.string,
  description: PropTypes.string,
  extraStyles: PropTypes.string,
  isDefiner: PropTypes.bool,
  withAction: PropTypes.bool,
};
