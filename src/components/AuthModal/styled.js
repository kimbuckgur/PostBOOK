import styled from "styled-components";

export const FlexColoum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LoginModalBackground = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  background: rgba(83, 83, 83, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginModal = styled.div`
  width: 450px;
  height: 500px;

  background: #ffffff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginModalTitle = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 25px;
  color: #343434;

  margin-bottom: 10px;
  margin-top: 40px;
`;

export const LoginModalLine = styled.div`
  width: 50px;
  height: 3px;
  background-color: rgba(53, 136, 243, 1);
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const LoginModalinput = styled.input`
  margin-top: ${(props) => props.margintop};
  width: 330px;
  height: 40px;
  border: none;
  border-bottom: 2px solid rgba(197, 197, 197, 1);
  outline: none;

  &::placeholder {
    font-family: "NanumSquare", sans-serif;
    font-size: 20px;
    padding-bottom: 10px;
    padding-left: 10px;
  }
`;

export const LoginModalButton = styled.button`
  cursor: pointer;

  font-family: NanumSquare;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 25px;
  color: #ffffff;

  width: 250px;
  height: 55px;
  border-radius: 100px;
  background-color: rgba(53, 136, 243, 1);

  border: none;
  margin-top: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginModalSignUp = styled.p`
  cursor: pointer;
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  color: #3588f3;

  margin-top: 15px;
`;
