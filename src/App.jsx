import Header from "./components/UI/Header/Header";
import Nav from "./components/UI/Nav/Nav";
import Section from "./components/UI/Section/Section";
import Footer from "./components/UI/Footer/Footer";
import YourText from "./components/UI/YourText/YourText";
import Data from "./components/UI/Data/Data";
import Article from "./components/UI/Article/Article";
import React, { useEffect, useState } from "react";
import "./App.scss";
import Bord from "./components/UI/Bord/Bord";

function App() {
  const [api, setApi] = useState([]);

  useEffect(function () {
    fetch("http://localhost:3030/course/1.json").then((res) =>
      res.json().then((res) => {
        console.log(api);
      })
    );
    console.log(api);
  }, []);
  return (
    <>
      <Header />
      <Nav />
      <Section />
      <Bord />
      <Article />
      <Data />
      <YourText />
      <Footer />
    </>
  );
}

export default App;
