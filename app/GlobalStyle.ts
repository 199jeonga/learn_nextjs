// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'G';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'E-300';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/EASTARJET-Medium.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: 'E-500';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/EASTARJET-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
}



  /* 여기에 CSS 리셋 또는 초기화 스타일을 추가합니다. */
    html {
    /* reset.css */
    width: 100%;
    height: 100%;
    body {
    width: 100%;
    height: 100%;
    font-family:"G","E-300" ,"E-500" ,"apple GD", "NanumSquareNeo-Variable", "noto sans KR",
    "noto sans KR", sans-serif;
    }
    html,
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    pre,
    blockquote,
    address,
    ul,
    ol,
    li,
    dl,
    dt,
    dd,
    hr,
    button,
    img,
    div,
    header,
    article,
    nav,
    section,
    footer,
    aside,
    main,
    figure,
    figcaption,
    hgroup,
    section,
    form,
    fieldset,
    textarea,
    select {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    box-sizing: border-box;
    }
    p,
    span,
    div,
    li {
    font-size: 16px;
    }
    p,
    span,
    div,
    li{
      font-family:"E-300" ;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    input,
    td,
    button,
    a,
    label {
    font-size:16px;
    font-family:"G"
    }
    button{
      border-radius:4px;
    }
    ul,
    li,
    ol {
    list-style: none;
    }

    hr {
    width: 100%;
    border: 0;
    border-bottom: 0.0625rem solid #505050;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    a:hover {
    text-decoration: none;
    }

    button,
    .buttonLink {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    text-align: center;
    }

    em,
    address,
    i {
    font-style: normal;
    }

    abbr {
    text-decoration: none;
    }

    table,
    tr,
    td,
    th,
    thead,
    tbody,
    tfoot {
    border: none;
    border-spacing: 0;
    border-collapse: collapse;
    }

    select,
    input {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    }

    p,
    textarea {
    line-height: 150%;
    letter-spacing: 0.02em;
    white-space: pre-wrap;
    }

    input[type="text"],
    input[type="password"],
    input[type="tel"],
    input[type="url"],
    input[type="email"],
    input[type="search"] {
    cursor: pointer;
    }

    select,
    input,
    textarea {
    cursor: pointer;
    }

    input:focus {
    outline: none;
    }

    header,
    article,
    nav,
    section,
    footer,
    aside,
    main,
    figure,
    figcaption,
    hgroup {
    display: block;
    }
    [type="radio"] {
    vertical-align: middle;
    }

    li {
    list-style: none;
    list-style-type: none;
    }

  }
`;

export default GlobalStyle;
