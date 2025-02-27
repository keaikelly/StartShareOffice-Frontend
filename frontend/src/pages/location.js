import React, { useEffect } from "react";
import styles from "./location.module.css";
import Marker from "../assets/mapMarker.png";
import Photo from "../assets/locationPhoto.jpeg";

const Location = () => {
  useEffect(() => {
    const initMap = () => {
      if (!window.naver || !window.naver.maps) {
        console.error("네이버 지도 API가 로드되지 않았습니다.");
        return;
      }

      const map = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(37.459063, 126.875579),
        zoom: 14,
      });

      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.459063, 126.875579),
        map: map,
        icon: {
          url: Marker,
          scaledSize: new window.naver.maps.Size(45, 45), // ✅ 크기 자동 조정
          anchor: new window.naver.maps.Point(10, 10), // 마커 중심 맞추기
        },
      });

      const infoWindow = new window.naver.maps.InfoWindow({
        content: `
          <div style="padding: 10px; "</div>
            <div style="font-weight: bold; margin-bottom: 5px;">스타트공유오피스</div>
            <div style="font-size: 13px;">경기도 광명시 오리로651번길 8 <br /> 광명현대테라타워 9층 924호</div>
          </div>
        `,
        maxWidth: 300,
        anchorSize: {
          width: 12,
          height: 14,
        },
        borderColor: "#cecdc7",
      });
      infoWindow.open(map, marker);
    };

    if (window.naver && window.naver.maps) {
      initMap();
    }
  }, []);

  const clicked = () => {
    navigator.clipboard.writeText(
      "경기도 광명시 오리로651번길 8 광명현대테라타워 9층 924호"
    );
    alert("📢 주소 복사가 완료되었습니다");
  };

  return (
    <div className={styles.display}>
      <div id="map" className={styles.map} />
      <div className={styles.right}>
        <div className={styles.box}>
          <div className={styles.address}>
            경기도 광명시 오리로651번길 8<br /> 광명현대테라타워 9층 924호
          </div>
          <button className={styles.copy} onClick={clicked}>
            copy
          </button>
        </div>
        <img className={styles.photo} src={Photo}></img>
      </div>
    </div>
  );
};

export default Location;
