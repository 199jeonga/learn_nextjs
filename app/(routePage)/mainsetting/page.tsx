"use client";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

// renderComponent 컴포넌트
import Main from "./(components)/Main";
import Sub from "./(components)/Sub";
import Gallery from "./(components)/Gallery";
import Chart from "./(components)/Chart";
import Home from "./(components)/Home";

export default function Page() {
  const btnList = ["메인", "서브", "갤러리", "차트"];
  const [btn, setBtn] = useState("메인");

  function renderComponent() {
    if (btn === "메인") {
      return <Main />;
    } else if (btn === "서브") {
      return <Sub />;
    } else if (btn === "갤러리") {
      return <Gallery />;
    } else if (btn === "차트") {
      return <Chart />;
    }
    return null;
  }

  const StyledWrap = styled.div`
    display: flex;
    width: 100vw;

    nav {
      padding: 0;
      display: flex;
      width: 300px;
      height: 100vh;
    }
    ul {
      width: 60px;
      background-color: #262626;
      border-right: 10px solid var(--color-yellow);
      margin: 0;
    }
    li {
      width: 60px;
      height: 60px;
      > button {
        width: 100%;
        height: 100%;
        font-size: 14px;
        font-weight: 700;
        color: #82b440;
        font-family: "G";
      }
      a {
        display: block;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 12px;
        font-weight: 700;
        background-color: #82b440;
        border-radius: 50%;
        font-family: "G";
      }
    }
    li:last-child {
      position: absolute;
      bottom: 5px;
      left: 5px;
    }
  `;

  return (
    <StyledWrap>
      <nav>
        <ul>
          {btnList.map((item, i) => (
            <li>
              <button key={i} onClick={() => setBtn(item)}>
                {item}
              </button>
            </li>
          ))}
          <li>
            <Link href="/login" scroll={false}>
              Login
            </Link>
          </li>
        </ul>
        {renderComponent()}
      </nav>
      <Home />
    </StyledWrap>
  );
}
