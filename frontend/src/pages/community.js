import React, { useEffect, useState } from "react";
import styles from "./community.module.css";
import { getBlogData, getNoticeData, setNoticeData } from "../api/api";
import { Navigate } from "react-router-dom";

const Community = () => {
  const [responseBlog, setResponsBlog] = useState([
    // { title: "더미제목1", text: "더미내용1" },
    // { title: "더미제목2", text: "더미내용2" },
    // { title: "더미제목3", text: "더미내용3" },
    // { title: "더미제목4", text: "더미내용4" },
    // { title: "더미제목5", text: "더미내용5" },
  ]);

  const [pw, setPw] = useState("");
  const [noticeTitle, setTitle] = useState("");
  const [noticeMsg, setMsg] = useState("");
  const newNotice = { title: noticeTitle, content: noticeMsg };
  const [noticeArr, setNoticeArr] = useState([]); //기본구조

  const send = () => {
    if (pw === "") {
      alert("관리자번호를 입력해주세요!");
      return;
    }
    if (noticeTitle === "") {
      alert("제목을 입력해주세요!");
      return;
    }
    if (noticeMsg === "") {
      alert("내용을 입력해주세요!");
      return;
    }

    if (pw === process.env.REACT_APP_PW) {
      alert("공지가 등록되었습니다!");
      setNoticeArr([...noticeArr, newNotice]); //프론트 배열에 추가

      setTitle("");
      setMsg("");
      setNoticeData(noticeTitle, noticeMsg); //객체를 post
    } else {
      alert("비밀번호를 다시 입력해주세요.");
    }
  };

  const pwChange = (event) => {
    setPw(event.target.value);
  };

  const titleChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const msgChange = (event) => {
    setMsg(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const responseBlog = await getBlogData("kahee9905");
        console.log("[블로그]: ", responseBlog);
        setResponsBlog(responseBlog.data);
      } catch (error) {
        console.error("Error fetching blogData: ", error);
      }
    };
    fetchBlogData();

    const fetchNoticeData = async () => {
      try {
        const responseNotice = await getNoticeData();
        console.log("[공지]: ", responseNotice);
        setNoticeArr(responseNotice.data.data);
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
        {responseBlog.map((content, index) => (
          <div key={index} className={styles.blogContainer}>
            {/* <div className={styles.blogTitle}>{content.title}</div> */}
            <button className={styles.blogText}>{content.title}</button>
          </div>
        ))}
      </div>

      <div className={styles.verLine}></div>
      <div className={styles.box}>
        <h1 className={styles.notice}>NOTICE</h1>
        <div className={styles.box}>
          <div className={styles.inputContainer}>
            <textarea
              className={styles.inputTitle}
              placeholder="공지 제목을 입력하세요"
              value={noticeTitle}
              onChange={titleChange}
            />
            <input
              className={styles.inputPw}
              placeholder="관리자번호"
              value={pw}
              onChange={pwChange}
              type="password"
            />

            <button className={styles.sendBtn} onClick={send}>
              ➜
            </button>
          </div>
          <textarea
            className={styles.inputMsg}
            placeholder="공지 메세지를 입력하세요"
            value={noticeMsg}
            onChange={msgChange}
          />

          {noticeArr.map((content, index) => (
            <div key={index} className={styles.noticeContainer}>
              <div className={styles.noticeText}>
                <h2>{content.title}</h2>
                {content.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
