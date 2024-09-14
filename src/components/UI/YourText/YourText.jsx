import "./YourText.scss";
import Button from "../Button/Button";
import Right from "../../../assets/YourText/Right.png";
import Left from "../../../assets/YourText/Left.png";
import Avatar from "../../../assets/YourText/Avatar.png";
import Img from "../../../assets/YourText/Img.png";
import sec from "../../../assets/YourText/sec.png"

export default function YourText() {
  return (
    <>
      <div className="YourText">
        <div className="baner">
          <h1>از زبان شما</h1>
          <div className="bord">
            <Button className="right">
              <img src={Right} alt="Right" />
            </Button>
            <div className="Tv">
              <div className="pic">
                
                  <img src={Avatar} alt="Avatar" />
                  <div >
                    <h3>جنی ویلسون</h3>
                    <p>UI/UX طراح</p>
                  </div>
                <img className="img" src={Img} alt="Img" />
              </div>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.{" "}
              </p>
            </div>
            <Button className="left">
              <img src={Left} alt="Left" />
            </Button>
          </div>
        </div>
        <img  className="sec" src={sec} alt="sec" />
      </div>
    </>
  );
}
