"use client";
import styled from "styled-components";

export default function Home() {
  const StyledWrap = styled.div`
    width: calc(100vw - 300px);
    padding: 10px;
    /* background-color: plum; */
    > div {
      width: 1100px;
      height: auto;
      margin: 0 auto;
      background-color: fff;
    }
  `;

  return (
    <StyledWrap>
      <div>ddd</div>
    </StyledWrap>
  );
}
