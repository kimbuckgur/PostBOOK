import React, { useState } from "react";
import MainPage from "./MainPage/MainPage";
import Book_Request from "./BookRequest/BookRequest";
import BookArrayPage from "./BookArrayPage/BookArrayPage";

function Main() {
  const [AuthBool, setAuthBool] = useState(false);

  return (
    <>
      <BookArrayPage/>
    </>
  );
}

export default Main;
