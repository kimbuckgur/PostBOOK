import React from "react";
import { useState } from "react/cjs/react.development";
import Heart from "../../assets/Heart.svg";
import HeartOn from "../../assets/HeartOn.svg";
import * as S from "./styled";

function OneBook({ bookmaker, bookname, creater, price }) {
  const [onOFF, setonOFF] = useState(false);

  const HeartOnOFF = () => {
    setonOFF(!onOFF);
  };

  return (
    <div>
      <S.OneBook>
        <S.FlexColoum>
          <S.OneBookTitle>{bookname}</S.OneBookTitle>
          <S.FlexLow>
            <S.OneBooktext marginL="0px">저자:{creater}</S.OneBooktext>
            <S.OneBooktext marginL="15px">출판사:{bookmaker}</S.OneBooktext>
          </S.FlexLow>
          <S.OneBookmoney>{price}</S.OneBookmoney>
        </S.FlexColoum>
        <S.MarL>
          {onOFF ? (
            <img src={HeartOn} onClick={HeartOnOFF} />
          ) : (
            <img src={Heart} onClick={HeartOnOFF} />
          )}
        </S.MarL>
        <S.OneBookTime>2022-01-01</S.OneBookTime>
      </S.OneBook>
      <S.OneBookline />
    </div>
  );
}

export default OneBook;
