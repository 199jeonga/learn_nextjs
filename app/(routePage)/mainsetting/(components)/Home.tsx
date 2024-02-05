"use client";
import styled from "styled-components";

export default function Home() {
  const StyledWrap = styled.div`
    width: calc(100vw - 300px);

    > div:first-child {
      width: 1100px;
      height: auto;
      margin: 0 auto;
      background-color: orange;
    }
  `;

  const StyledCellNumber = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 0;
    width: calc(100vw - 300px);
    height: 60px;
    background-color: red;
    > input {
      width: 170px;
      height: 40px;
      margin: 0 5px;
      margin-top: 10px;
      padding: 5px;
      border-radius: 4px;
    }
    > div {
      width: auto;
      display: flex;
      padding-top: 20px;
      margin-left: 5px;
      margin-right: 10px;
      input {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
    button {
      width: 120px;
      height: 40px;
      margin-top: 10px;
      background-color: yellow;
    }
  `;

  return (
    <StyledWrap>
      <div>ddd</div>
      <StyledCellNumber>
        <input placeholder="성함" />
        <input placeholder="전화번호" />
        <input placeholder="이메일" type="email" />
        <input placeholder="창업 희망 지역" />
        <div>
          <input type="checkbox" id="personal" />
          <label htmlFor="personal">개인정보처리방침</label>
        </div>
        <button>상담신청</button>
      </StyledCellNumber>
    </StyledWrap>
  );
}
