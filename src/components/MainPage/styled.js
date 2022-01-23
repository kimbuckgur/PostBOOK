import styled from "styled-components";

export const marginZero = styled.div`
  margin: 0px;
`;

export const FullPage = styled.div`
  margin: 0px;
  width: 100%;
  height: auto;
`;

export const MainPage = styled.div`
  overflow-y: hidden;
  width: max-content;
  height: 91vh;
  background-color: white;

  margin: 0px;

  display: flex;
  align-items: center;
`;

export const MainPageTitle = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 55px;
  color: rgba(52, 52, 52, 1);

  margin: 0px;
  margin-bottom: 0px;
  margin-left: 310px;
`;

export const MainPageServiceTitle = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 40px;
  color: rgba(11, 106, 231, 1);

  margin: 0px;
  margin-bottom: 17px;
  margin-left: 310px;
  height: 50px;
`;

export const MainPageText = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 30px;
  color: rgba(134, 134, 134, 1);

  margin: 0px;
  margin-left: 310px;
  margin-bottom: 130px;
`;

export const MainPageBackGroundIMG = styled.img`
  z-index: 1;
  position: relative;
  top: 0px;
  bottom: auto;
  margin-left: 295px;
`;

export const MainPageChracter = styled.img`
  z-index: 2;
  position: absolute;
  margin-top: 230px;
  margin-left: 400px;
`;
