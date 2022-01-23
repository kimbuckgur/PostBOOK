import React, { useState } from "react";
import axios from "axios";
import Data from "../DumyData";
import HeaderBar from "../Header/HeaderBar";
import * as S from "./styled";
import { Link } from "react-router-dom";

function Book_request() {
  const [RequsetInfo, setRequestInfo] = useState({
    bookmaker: "",
    bookname: "",
    creater: "",
    publisher: "",
    price: "",
  });

  const onChangeInfo = (e) => {
    const { name, value } = e.target;
    setRequestInfo({ ...RequsetInfo, [name]: value });
    console.log(RequsetInfo);
  };

  const onClickPOSTBookRequestInfo = () => {
    Data.unshift(RequsetInfo);
  };
  return (
    <S.BookRequest>
      <HeaderBar />
      <S.BookRequestInfo>
        <S.BookRequestFlexL>
          <S.BookRepuestTitle>도서신청</S.BookRepuestTitle>
          <Link to="/" style={{ textDecoration: "none" }}><S.BookRequestButton onClick={onClickPOSTBookRequestInfo}>신청하기</S.BookRequestButton></Link>
        </S.BookRequestFlexL>
        <S.BookRequestText>제목</S.BookRequestText>
        <S.BookRequestInput
          onChange={onChangeInfo}
          name="bookname"
          placeholder="제목"
        />
        <S.BookRequestText>글쓴이</S.BookRequestText>
        <S.BookRequestInput
          onChange={onChangeInfo}
          name="creater"
          placeholder="글쓴이"
        />
        <S.BookRequestText>출판사</S.BookRequestText>
        <S.BookRequestInput
          onChange={onChangeInfo}
          name="bookmaker"
          placeholder="출판사"
        />
        <S.BookRequestText>가격</S.BookRequestText>
        <S.BookRequestInput
          onChange={onChangeInfo}
          name="price"
          placeholder="가격(숫자만적어주세요)"
        />
        <S.BookRequestText>신청자 이름</S.BookRequestText>
        <S.BookRequestInput
          onChange={onChangeInfo}
          name="publisher"
          placeholder="신청자 이름"
        />
      </S.BookRequestInfo>
    </S.BookRequest>
  );
}

export default Book_request;
