import styled from "styled-components";
import styles from "../Setting.module.css";

export default function Main({ data }: any) {
  return (
    <div className={styles.mainSettingWrap}>
      <h2>메인 비주얼</h2>
      <div className={styles.mainSettigContent}>
        <div>
          <button>이미지</button>
          <button>슬라이드</button>
          <button>문구추가</button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
