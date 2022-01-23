import styled from "styled-components";

export const BookRequest = styled.div`
  width: 100%;
  height: 100vh;

  background-color: rgba(241, 241, 241, 1);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookRequestInfo = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0px;

  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 100px;
`;

export const BookRepuestTitle = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 30px;
  color: #343434;

  margin-top: 60px;
  margin-bottom: 50px;
`;

export const BookRequestText = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 30px;
  color: #434343;

  margin: 0px;
  margin-bottom: 25px;
`;

export const BookRequestInput = styled.input`
  width: 800px;
  height: 50px;
  border: 2px solid rgba(148, 148, 148, 1);
  border-radius: 5px;
  padding-left: 20px;
  margin-bottom: 30px;

  &::placeholder {
    font-family: "NanumSquare", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 22px;
    color: #949494;
  }
`;

export const BookRequestFlexL = styled.div`
  display: flex;
  align-items: center;
`;

export const BookRequestButton = styled.button`
  font-family: "NanumSquare", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  color: #3588f3;

  width: 150px;
  height: 40px;
  border: 2px solid rgba(53, 136, 243, 1);
  border-radius: 5px;
  background-color: white;
  margin-left: 560px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.5s;

  :hover {
    cursor: pointer;
    background-color: rgba(53, 136, 243, 1);
    color: white;
  }
`;
