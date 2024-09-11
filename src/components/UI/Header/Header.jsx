import Vector from "../../../assets/header/Vector.png";
import Logo from "../../../assets/header/Logo.png";
import Menu from "../../../assets/header/menu-01.png";
import Pic from "../../../assets/header/Pic.png";
import Serch from "../../../assets/header/serch.png";
import Group from "../../../assets/header/Group.png";
import IPhone from "../../../assets/header/iPhone.png";
import "./header.scss";

function Header() {
  return (
    <header>
      <di className="up">
        <div className="right">
          <img className="vector" src={Vector} alt="Vector" />
          <img className="logo" src={Logo} alt="Logo" />
        </div>
        <img className="Menu" src={Menu} alt="Menu" />
      </di>
      <div className="p">
        <h3>یادگیری آنلاین</h3>
        <p>دسترسی به بیش از 5000 دوره آموزشی از 300 مدرس و موسسه</p>
      </div>
      <div className="img">
        <img className="left" src={Group} alt="vector" />
        <img className="in" src={Pic} alt="pic" />
      </div>
      <div className="input">
        <input type="text" />
        <img src={Serch} alt="serch" />
      </div>
      <div className="iPhone">
        <img src={IPhone} alt="iPhone" />
      </div>
    </header>
  );
}

export default Header;
