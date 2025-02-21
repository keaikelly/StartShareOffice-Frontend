import React from "react";
import styles from "./main.module.css";
import { BsChevronCompactDown } from "react-icons/bs";

const Main = () => {
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

      {/* <img className={styles.img} src="./main.jpeg"></img> */}
    </div>
  );
};

export default Main;
