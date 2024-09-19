// import Header from "./components/UI/Header/Header";
// import Nav from "./components/UI/Nav/Nav"
// import Section from "./components/UI/Section/Section"
import Footer from "./components/UI/Footer/Footer";
import YourText from "./components/UI/YourText/YourText";
import Data from "./components/UI/Data/Data";
import Article from "./components/UI/Article/Article";
import React, { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [api, setApi] = useState(null;

  useEffect(() => {
    fetch("http://localhost:3030/course/1.json").then((res) =>
      res.json().then((data) =>{console.log(api)})
    );
    console.log(api);
    console.log(setApi);

  }, []);
  return (
    <>
      {/* <Header />
      <Nav />
      <Section /> */}

      <Article />
      <Data />
      <YourText />
      <Footer />
    </>
  );
}

export default App;
