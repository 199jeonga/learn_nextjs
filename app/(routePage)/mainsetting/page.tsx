"use client";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

import { FaChartPie } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { MdWidthWide, MdFavorite } from "react-icons/md";
import { FaListOl } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";

// renderComponent 컴포넌트
import Main from "./(components)/Main";
import Sub from "./(components)/Sub";
import Gallery from "./(components)/Gallery";
import Chart from "./(components)/Chart";
import Home from "./(components)/Home";

export default function Page() {
  const btnList = ["메인", "순서", "갤러리", "차트", "매출", "특장점"];
  const [btn, setBtn] = useState("메인");

  function renderComponent() {
    if (btn === "메인") {
      return <Main />;
    } else if (btn === "순서") {
      return <Sub />;
    } else if (btn === "갤러리") {
      return <Gallery />;
    } else if (btn === "차트") {
      return <Chart />;
    } else if (btn === "매출") {
      return <Chart />;
    } else if (btn === "특장점") {
      return <Chart />;
    }
    return null;
  }

  function renderIcon(item: string) {
    if (item === "메인") {
      return <MdWidthWide />;
    } else if (item === "순서") {
      return <FaListOl />;
    } else if (item === "갤러리") {
      return <RiGalleryFill />;
    } else if (item === "차트") {
      return <FaChartPie />;
    } else if (item === "매출") {
      return <GrMoney />;
    } else if (item === "특장점") {
      return <MdFavorite />;
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
      width: 50px;
      height: 40px;
      margin: 15px 5px;
      > button {
        width: 100%;
        height: 100%;
        font-size: 18px;
        padding-top: 4px;
        font-weight: 700;
        color: #82b440;
        font-family: "G";
      }
      button.active {
        background-color: #82b440;
        color: white;
        border-radius: 4px;
      }
    }
    li:last-child {
      width: 50px;
      height: 70px;
      position: absolute;
      bottom: 0;
      left: 5px;
      margin: 0;
      border-top: 1px solid rgba(255, 255, 255, 0.3);
    }
    a {
      display: block;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 11px;
      font-weight: 700;
      background-color: #82b440;
      color: white;
      border-radius: 50%;
      font-family: "G";
      margin: 15px 5px;
    }
  `;

  return (
    <StyledWrap>
      <nav>
        <ul>
          {btnList.map((item, i) => (
            <li key={i}>
              <button
                key={i}
                onClick={() => setBtn(item)}
                className={item == btn ? "active" : ""}
              >
                {renderIcon(item)}
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
