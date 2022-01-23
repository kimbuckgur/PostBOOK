import React, { useState } from "react";
import { Route, Link, BrowserRouter, Router } from "react-router-dom";
import * as S from "./styled";

function HeaderBar() {
  return (
    <S.Header>
      <S.Header_Main>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <S.Header_Title>PostBOOK</S.Header_Title>
        </Link>
        <S.Header_textAria>
          <Link to="/" style={{ textDecoration: "none" }}>
            <S.Header_text left="0px">메인페이지</S.Header_text>
          </Link>
          <Link to="/Book_Request" style={{ textDecoration: "none" }}>
            <S.Header_text left="100px">도서 신청</S.Header_text>
          </Link>
          <Link to="/BookList" style={{ textDecoration: "none" }}>
            <S.Header_text left="100px">신청도서 목록</S.Header_text>
          </Link>
        </S.Header_textAria>
      </S.Header_Main>
      <S.Header_GuidLine />
    </S.Header>
  );
}

export default HeaderBar;
