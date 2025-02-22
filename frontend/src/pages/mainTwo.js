import React from "react";
import styles from "./mainTwo.module.css";
import { IoIosCall } from "react-icons/io";
import { BsChevronCompactDown } from "react-icons/bs";
import { MdAccountBalance } from "react-icons/md";

const phoneNumData = ["010-6203-2830", "010-9390-2835", "02-3147-4310"];

const MainTwo = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.text}>
          소유주가 직접 운영합니다
          <br />
          <br />
          24시간 언제든지 <br />
          계약 및 업무가 가능합니다
          <br />
          <br />
          금액은 협의 가능하오니 <br />
          문의주시면 감사하겠습니다
          <br />
        </div>
        <div className={styles.phone}>
          <div className={styles.notch}></div>
          <div className={styles.phoneNum}>
            {phoneNumData.map((content, index) => (
              <div key={index} className={styles.phoneItem}>
                <IoIosCall className={styles.phoneNumIcon} />
                <span>{content}</span>
              </div>
            ))}
          </div>
          <div className={styles.account}>
            <div className={styles.accountIcon}>
              <MdAccountBalance />
            </div>
            <div className={styles.accountText}>
              예금주명 | 안가희 (스타트공유오피스) <br />
              입금은행 | 국민은행 <br />
              계좌번호 | 047101-04-278937
            </div>
          </div>
          <div className={styles.bar}></div>
        </div>
      </div>
      <div className={styles.down}>
        <BsChevronCompactDown />
      </div>
    </div>
  );
};

export default MainTwo;
