import styles from "./Pagination.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type Props = {
  length: number;
};
export default function Pagination({ length }: Props) {
  const [selectedItem, setSelectedItem] = useState(0);
  const changeSelectedItem = (index: number) => {
    if (index < length && index >= 0) setSelectedItem(index);

    console.log(selectedItem);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex gap-3">
        <button
          title="Prev Navigation"
          data-prev-pagination
          className={classNames(styles["button--navigation"], styles.button)}
          onClick={() => changeSelectedItem(selectedItem - 1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {new Array(length).fill(1).map((item, index) => {
          return (
            <button
              title={(index + 1).toString()}
              onClick={() => changeSelectedItem(index)}
              className={classNames(styles.button, { [styles["button--active"]]: index == selectedItem })}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}

        <button
          title="Next Navigation"
          data-next-pagination
          className={classNames(styles["button--navigation"], styles.button)}
          onClick={() => changeSelectedItem(selectedItem + 1)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
