import React from "react";
import * as S from "./styled";

function Loginmodal({test,setTest}) {
  return (
    <S.LoginModalBackground>
      <S.LoginModal>
        <S.LoginModalTitle>Login</S.LoginModalTitle>
        <S.LoginModalLine />
        <S.LoginModalinput placeholder="아이디를 입력해주세요" margintop="0px"/>
        <S.LoginModalinput placeholder="비밀번호를 입력해주세요" margintop="75px"/>
        <S.LoginModalButton>로그인</S.LoginModalButton>
        <S.LoginModalSignUp>회원가입하러 가기</S.LoginModalSignUp>
      </S.LoginModal>
    </S.LoginModalBackground>
  );
}

export default Loginmodal;
