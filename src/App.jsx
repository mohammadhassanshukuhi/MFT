import Header from "./components/UI/Header/Header";
import Nav from "./components/UI/Nav/Nav";
import Section from "./components/UI/Section/Section";
import Footer from "./components/UI/Footer/Footer";
import YourText from "./components/UI/YourText/YourText";
import Data from "./components/UI/Data/Data";
import Article from "./components/UI/Article/Article";
import "./App.scss";
import Bord from "./components/UI/Bord/Bord";

function App() {
 
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
