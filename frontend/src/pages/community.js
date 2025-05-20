import React, { useEffect, useState } from "react";
import styles from "./community.module.css";
import { getBlogData, getNoticeData, setNoticeData } from "../api/api";

const blogArray = [
  { title: "더미제목1", text: "더미내용1" },
  { title: "더미제목2", text: "더미내용2" },
  { title: "더미제목3", text: "더미내용3" },
  { title: "더미제목4", text: "더미내용4" },
  { title: "더미제목5", text: "더미내용5" },
];

const Community = () => {
  const [msg, setMsg] = useState("");
  const [noticeArr, setNoticeArr] = useState([
    "사장님들의 의견을 적극수용하여",
    "인테리어를 개인룸으로 리뉴얼 했습니다~",
    "사장님들의 의견을 적극수용하여 인테리어를 개인룸으로 리뉴얼 했습니다~",
  ]);

  const send = () => {
    if (msg === "") {
      alert("내용을 입력해주세요!");
      return;
    }
    setNoticeArr([...noticeArr, msg]);
    setMsg("");
    setNoticeData();
  };

  const msgChange = (event) => {
    setMsg(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await getBlogData();
        console.log("[블로그]: ", response);
      } catch (error) {
        console.error("Error fetching blogData: ", error);
      }
    };
    fetchBlogData();

    const fetchNoticeData = async () => {
      try {
        const responseNotice = await getNoticeData();
        console.log("[공지]: ", responseNotice);
      } catch (error) {
        console.error("Error fetching noticeData: ", error);
      }
    };
    fetchNoticeData();
  }, []); // 외부에서 가져온건 의존성 배열에 x

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.blog}>BLOG</h1>
        {blogArray.map((content, index) => (
          <div key={index} className={styles.blogContainer}>
            <div className={styles.blogTitle}>{content.title}</div>
            <div className={styles.blogText}>{content.text}</div>
          </div>
        ))}
      </div>

      <div className={styles.verLine}></div>
      <div className={styles.box}>
        <h1 className={styles.notice}>NOTICE</h1>
        <div className={styles.box}>
          <div className={styles.inputContainer}>
            <textarea
              className={styles.input}
              placeholder="공지 메세지를 입력하세요"
              value={msg}
              onChange={msgChange}
            />
            <button className={styles.sendBtn} onClick={send}>
              ➜
            </button>
          </div>

          {noticeArr.map((content, index) => (
            <div key={index} className={styles.noticeContainer}>
              <div className={styles.noticeText}>
                <h2>[공지]</h2>
                {content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
