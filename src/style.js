// 由于css文件在引入时，一个组件引入会在整个组件内生效，会互相干扰，由此借用第三方库styled-components进行样式管理
// 在编写全局样式时，有特定写法
// njectGlobal 全局样式在V4版本代替为使用 createGlobalStyle 渲染组件的方式来使用全局样式。
// 用法见此网址 https://www.jianshu.com/p/4c69abc91971

import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    border:0;
  }
  input {
    border: 0;
    outline: none;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    padding-top: 56px;
    background: rgb(249,249,249);
   }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .left {
    float: left;
  }
  .right {
    float:right;
  }
`
// listItem

export const listItem = styled.div`
  height: 100px;
  background: red;
`
export const Word = styled.span`
  height: 100%;
  color: #969696;
`