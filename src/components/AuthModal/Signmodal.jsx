import React from "react";

function Signmodal() {
  return (
    <S.LoginModalBackground>
      <S.LoginModal>
        <S.LoginModalTitle>Sign Up</S.LoginModalTitle>
        <S.LoginModalLine />
        <S.LoginModalinput
          placeholder="아이디를 입력해주세요"
          margintop="0px"
        />
        <S.LoginModalinput
          placeholder="비밀번호를 입력해주세요"
          margintop="75px"
        />
        <S.LoginModalButton>회원가입</S.LoginModalButton>
        <S.LoginModalSignUp>로그인하러 가기</S.LoginModalSignUp>
      </S.LoginModal>
    </S.LoginModalBackground>
  );
}

export default Signmodal;
