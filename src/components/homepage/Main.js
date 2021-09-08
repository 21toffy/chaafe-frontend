import React from "react";
import Header from "../units/Header";
import Navbar from "../units/Navbar";
const Main = (props) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{props.children}</main>
    </>
  );
};

export default Main;
