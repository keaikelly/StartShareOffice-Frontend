import React from "react";
import styles from "./mainThree.module.css";
import { MdOutlineSecurity } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";

const item = [
  {
    icon: <MdOutlineSecurity />,
    title: "철저한 보안",
    descrip:
      "보안출입카드, 지문인식 출입, 룸별 도어락, \n CCTV를 보유하고 있습니다.",
  },
  {
    icon: <FaLeaf />,
    title: "다양한 시설",
    descrip:
      "쾌적한 공용 로비, 휴게실, 옥상, 사무기기, 커피, \n 얼음정수기, 구내식당 이용이 가능합니다.",
  },
  {
    icon: <FaCar />,
    title: "편안한 출근",
    descrip:
      "무료 주차 제공, 주차장 내 전기차 충전소 및 \n 자전거 거치대를 보유하고 있습니다.",
  },
  {
    icon: <BsBoxSeam />,
    title: "상주 / 비상주",
    descrip: "실입주 없이 주소만으로 \n 사업자등록을 해드립니다. ",
  },
];

const MainThree = () => {
  return (
    <div>
      <div className={styles.grid}>
        {item.map((content, index) => (
          <div key={index} className={styles.gridItem}>
            <div className={styles.title}>
              {content.icon}
              {content.title}
            </div>
            <div className={styles.descrip}>
              {" "}
              {content.descrip.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainThree;
