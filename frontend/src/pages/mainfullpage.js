import React, { useEffect } from "react";
import $ from "jquery"; // jQuery 필수
// import "fullpage.js/dist/jquery.fullpage.css";
import "fullpage.js";

import MainOne from "./mainOne"; // 1-1 page
import MainTwo from "./mainTwo";
import MainThree from "./mainThree";

const MainFullPage = () => {
  useEffect(() => {
    $("#fullpage").fullpage({
      autoScrolling: true, // 한 페이지씩 스크롤
      scrollingSpeed: 1000, // 스크롤 속도 설정
      // scrollOverflow: true, // 내부 스크롤 허용
    });

    return () => {
      $.fn.fullpage.destroy("all"); // 언마운트 시 정리
    };
  }, []);

  return (
    <div id="fullpage">
      <div className="section">
        <MainOne />
      </div>
      <div className="section">
        <MainTwo />
      </div>
      <div className="section">
        <MainThree />
      </div>
    </div>
  );
};

export default MainFullPage;
