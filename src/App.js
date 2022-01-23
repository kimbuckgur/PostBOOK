import React, { useState } from "react";
import MainPage from "./components/MainPage/MainPage";
import BookArrayPage from "./components/BookArrayPage/BookArrayPage";
import Book_Request from "./components/BookRequest/BookRequest";
import Add from "./components/BookArrayPage/Add";

import { Route, Link, BrowserRouter, Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={MainPage} />
        <Route path="/Book_Request" component={Book_Request} />
        <Route exact path="/BookList" component={Add} />
      </BrowserRouter>
      {/* <BookArrayPage/> */}
    </div>
  );
}

export default App;
