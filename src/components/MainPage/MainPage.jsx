import React from "react";
import HeaderBar from "../Header/HeaderBar";

import MainPageChracter from "../../assets/MainPageChracter.svg";
import BackGroundIMG from "../../assets/MainPageBackGrounfIMG.svg";
import * as S from "./styled";

function MainPage() {
  return (
    <S.FullPage>
      <HeaderBar />
      <S.MainPage>
        <S.marginZero>
          <S.MainPageTitle>도서 신청 서비스</S.MainPageTitle>
          <S.MainPageServiceTitle>PostBOOK</S.MainPageServiceTitle>
          <S.MainPageText>
            저희 도서 신청 서비스를 이용하여 <br />
            학교도서관에 새로운 도서를 추가해보세요
          </S.MainPageText>
        </S.marginZero>
        <S.marginZero>
          <S.MainPageChracter src={MainPageChracter} />
          <S.MainPageBackGroundIMG src={BackGroundIMG} />
        </S.marginZero>
      </S.MainPage>
    </S.FullPage>
  );
}

export default MainPage;
