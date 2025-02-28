import React from "react";
import styles from "./roomInfo.module.css";

import photo12 from "../assets/room1-2.jpg";
import photo34 from "../assets/room3-4.jpeg";
import photo59 from "../assets/room5-9.jpeg";
import photo10 from "../assets/room10.jpg";

import OaImg1 from "../assets/OaImg1.jpg";
import OaImg2 from "../assets/OaImg2.jpg";
import OaImg3 from "../assets/OaImg3.jpg";

const info = [
  {
    img: photo12,
    descrip: "쾌적한 크기",
    title: "개인룸 [ room 1 / 2 ]",
    item: "넓은 책상, 창문, 블라인드, 에어컨, 도어락, 서랍장",
  },
  {
    img: photo34,
    descrip: "비교적 작은 크기",
    title: "개인룸 [ room 3 / 4 ]",
    item: "넓은 책상, 개별 서랍장",
  },
  {
    img: photo59,
    descrip: "적당한 크기",
    title: "개인룸 [ room 5 / 6 / 7 / 8 / 9 ]",
    item: "넓은 책상, 개별 서랍장",
  },
  {
    img: photo10,
    descrip: "",
    title: "2인실 개인룸 [ room 10 ]",
    item: "넓은 책상, 칠판",
  },
];

const OaImg = [OaImg1, OaImg2, OaImg3];

const roomInfo = () => {
  return (
    <div>
      <h1 className={styles.notice}>
        [ 금액은 협의 가능하오니 문의주시면 감사하겠습니다 ]
      </h1>
      <div>
        {info.map((content, index) => (
          <div key={index} className={styles.container}>
            <img className={styles.img} src={content.img}></img>
            <div className={styles.texts}>
              <div className={styles.descrip}>{content.descrip}</div>
              <h3 className={styles.title}>{content.title}</h3>
              <div className={styles.item}>{content.item}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <h1> 공용 및 OA 공간</h1>
        <div className={styles.OaImgs}>
          {OaImg.map((content, index1) => (
            <img key={index1} className={styles.OaImg} src={content}></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default roomInfo;
