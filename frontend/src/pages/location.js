import React, { useState } from "react";
import styles from "./location.module.css";
import Photo from "../assets/locationPhoto.jpeg";

import marker from "../assets/mapMarker.png";

import { Map, MapMarker } from "react-kakao-maps-sdk";

const Location = () => {
  const clicked = () => {
    navigator.clipboard.writeText(
      "경기도 광명시 오리로651번길 8 광명현대테라타워 9층 924호"
    );
    alert("📢 주소 복사가 완료되었습니다");
  };

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.display}>
      <Map
        className={styles.map}
        center={{ lat: 37.459063, lng: 126.875579 }}
        level={6}
      >
        <MapMarker // 마커생성
          position={{
            lat: 37.459063,
            lng: 126.875579,
          }}
          image={{
            src: marker,
            size: {
              width: 50,
              height: 50,
            }, // 마커이미지의 크기
            options: {
              offset: {
                x: 0,
                y: 0,
              }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            },
          }}
          clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
          onClick={() => setIsOpen(true)}
        >
          {isOpen && (
            <div>
              <img
                alt="close"
                src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif" //닫기 이미지
                style={{
                  position: "absolute",
                  right: "5px",
                  top: "5px",
                  cursor: "pointer",
                }}
                onClick={() => setIsOpen(false)}
              />
              <div className={styles.marker}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginRight: "5px",
                  }}
                >
                  스타트공유오피스
                </div>
                <div style={{ fontSize: "14px" }}>
                  경기도 광명시 오리로651번길 8 <br />
                  광명현대테라타워 9층 924호 \{" "}
                </div>
              </div>
            </div>
          )}
        </MapMarker>
      </Map>

      <div className={styles.right}>
        <div className={styles.box}>
          <div className={styles.address}>
            경기도 광명시 오리로651번길 8<br /> 광명현대테라타워 9층 924호
          </div>
          <button className={styles.copy} onClick={clicked}>
            copy
          </button>
        </div>
        <img className={styles.photo} src={Photo} alt="오피스 이미지" />
      </div>
    </div>
  );
};

export default Location;
