import React, { useEffect, useState } from "react";
import HeaderBar from "../Header/HeaderBar";
import Loginmodal from "../AuthModal/Loginmodal";

import Data from "../DumyData";
import OneBook from "./OneBook";
import arrowL from "../../assets/arrowL.svg";
import arrowR from "../../assets/arrowR.svg";

import * as S from "./styled";

function BookArrayPage() {
  const [BookArray, setBookArray] = useState(Data);
  const [MoveNum, setMoveNum] = useState(1);

  const BookArrayMap = BookArray.map((x, index) => {
    return (
      <>
        {index >= 10 * (MoveNum - 1) && index < 10 * MoveNum ? (
          <>
            <OneBook
              bookmaker={x.bookmaker}
              bookname={x.bookname}
              creater={x.creater}
              price={x.price}
            />
          </>
        ) : (
          <></>
        )}
      </>
    );
  });

  const MoveNumPlus = () => {
    if (MoveNum >= 2) {
      setMoveNum(MoveNum - 1);
    }
  };

  const MoveNumMinus = () => {
    if (MoveNum <= BookArray.length / 10) {
      setMoveNum(MoveNum + 1);
    }
  };

  return (
    <S.BookArrayPage>
      <HeaderBar />
      <S.TextFlexcouloum>
        <S.BookArraytitle>신청도서 목록</S.BookArraytitle>
        <S.BookArraytitleLine />
        <S.BookArraytext>
          신청도서 목록을 보고 도서관에 넣고싶은 책을 추천해주세요
        </S.BookArraytext>
      </S.TextFlexcouloum>

      <S.TextFlexcouloum>
        <S.BookArrayinformation>
          <S.BookArrayinformationTextL>책정보</S.BookArrayinformationTextL>
          <S.BookArrayinformationTextR>
            추천 & 신청날짜
          </S.BookArrayinformationTextR>
        </S.BookArrayinformation>
        <S.BookArrayinformationLine />
      </S.TextFlexcouloum>
      {BookArrayMap}
      <S.BookArrayArrowAria>
        <img src={arrowL} onClick={MoveNumPlus} style={{ cursor: "pointer" }} />
        <S.BookArrayArrowtext>{MoveNum}</S.BookArrayArrowtext>
        <img
          src={arrowR}
          onClick={MoveNumMinus}
          style={{ cursor: "pointer" }}
        />
      </S.BookArrayArrowAria>
    </S.BookArrayPage>
  );
}

export default BookArrayPage;
