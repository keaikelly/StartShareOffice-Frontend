import { useLocation, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { HiBuildingOffice2 } from "react-icons/hi2";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.default}>
      <button onClick={() => navigate(`/`)} className={styles.title}>
        스타트공유오피스
        <HiBuildingOffice2 />
      </button>

      <div className={styles.menu}>
        <button
          onClick={() => navigate("/location")}
          className={`${styles.btn} ${
            location.pathname === "/location" ? styles.btnActive : ""
          }`}
        >
          오시는길
        </button>
        <button
          onClick={() => navigate("/roomInfo")}
          className={`${styles.btn} ${
            location.pathname === "/roomInfo" ? styles.btnActive : ""
          }`}
        >
          내부소개
        </button>
        <button
          onClick={() =>
            (window.location.href =
              "https://starko20235.modoo.at/?link=eqbj74g2")
          }
          className={styles.btn}
        >
          스토어
        </button>{" "}
        <button
          onClick={() => navigate("/community")}
          className={`${styles.btn} ${
            location.pathname === "/community" ? styles.btnActive : ""
          }`}
        >
          커뮤니티
        </button>
      </div>
    </div>
  );
};

export default Header;
