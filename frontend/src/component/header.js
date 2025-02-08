import styles from "./header.module.css";
import { HiBuildingOffice2 } from "react-icons/hi2";

const Header = () => {
  return (
    <div className={styles.default}>
      <div className={styles.title}>
        스타트공유오피스
        <HiBuildingOffice2 />
      </div>

      <div className={styles.menu}>
        <div>오시는길</div>
        <div>내부소개</div>
        <div>스토어</div>
        <div>커뮤니티</div>
      </div>
    </div>
  );
};

export default Header;
