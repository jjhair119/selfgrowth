import { createGlobalStyle } from 'styled-components';

import MyFont from './BMHANNA_11yrs_ttf.ttf'; // 폰트 경로를 정확히 지정하세요

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MyFont';
    src: url(${MyFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'MyFont', sans-serif;
  }
`;

export default GlobalStyle;
