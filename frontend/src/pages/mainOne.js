import React from "react";
import styles from "./mainOne.module.css";
import { BsChevronCompactDown } from "react-icons/bs";

const MainOne = () => {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.text}>
          깨끗하고 편안한 <br />
          공유 오피스 <br />
        </div>
        <div className={styles.tag}>
          #가산디지털단지역 #독산역 #철산역 #광명역
        </div>
        <div className={styles.down}>
          <BsChevronCompactDown />
        </div>
      </div>
    </div>
  );
};

export default MainOne;
