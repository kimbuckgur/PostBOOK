import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 81px;
`;
export const Header_Main = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;

  display: flex;
  align-items: center;
`;
export const Header_GuidLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(216, 216, 216, 1);
`;

export const Header_Title = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 23px;
  color: rgba(11, 106, 231, 1);

  margin-left: 250px;
`;

export const Header_textAria = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-right: 683px;
`;

export const Header_text = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 25px;

  color: rgba(52, 52, 52, 1);
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-left: ${(props) => props.left};
`;
