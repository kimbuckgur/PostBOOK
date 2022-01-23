import styled from "styled-components";

export const FlexColoum = styled.div`
  margin-left: 60px;

  display: flex;
  flex-direction: column;
`;

export const FlexLow = styled.div`
  display: flex;
`;

export const BookArrayPage = styled.div`
  position:relative;

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookArraytitle = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 38px;
  color: rgba(52, 52, 52, 1);

  margin: 0px;
  margin-top: 90px;
`;

export const BookArraytitleLine = styled.div`
  width: 30px;
  height: 2px;
  background-color: rgba(53, 136, 243, 1);
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const BookArraytext = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 20px;
  color: #676767;

  margin: 0px;
`;

export const TextFlexcouloum = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center

`

export const BookArrayinformation = styled.div`
  display: flex;
  width: 1200px;

  margin-top: 100px;
`;

export const BookArrayinformationTextL = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 25px;
  color: rgba(53, 136, 243, 1);

  margin: 0px;
  margin-bottom: 20px;
  margin-left: 60px;
`;

export const BookArrayinformationTextR = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 25px;
  color: rgba(53, 136, 243, 1);

  margin: 0px;
  margin-bottom: 20px;
  margin-left: 805px;
`;

export const BookArrayinformationLine = styled.div`
  width: 1200px;
  height: 5px;
  background-color: rgba(11, 106, 231, 1);
  margin: 0px;
`;

export const BookArrayArrowAria = styled.div`
  display:flex;
  align-items:center;
`

export const BookArrayArrowtext = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  color: rgba(12, 112, 242, 1);

  margin-left:20px;
  margin-right:20px;
`

export const OneBook = styled.div`
  width: 1200px;
  height: 120px;

  display: flex;
  align-items: center;
  
`;
export const OneBookline = styled.div`
  width: 1200px;
  height: 1px;
  background-color: rgba(215, 215, 215, 1);
`;

export const OneBookTime = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 21px;
  color: rgba(96, 96, 96, 1);

  margin-left: 20px;
`;

export const OneBookTitle = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 25px;
  color: rgba(52, 52, 52, 1);

  margin: 0px;
  margin-bottom: 8px;
`;

export const OneBooktext = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  color: #606060;

  margin: 0px;
  margin-left: ${(props) => props.marginL};
`;

export const OneBookmoney = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 22px;
  color: #ff6868;

  margin: 0px;
  margin-top: 8px;
`;

export const MarL = styled.div`
  margin-left:635px;
`