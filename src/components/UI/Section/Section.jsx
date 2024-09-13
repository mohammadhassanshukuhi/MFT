import Button from "../Button/Button";
import Right from "../../../assets/section/right.png";
import Left from "../../../assets/section//left.png";
import Frame1 from "../../../assets/section/Frame1.png";
import Frame2 from "../../../assets/section/Frame2.png";
import Frame3 from "../../../assets/section/Frame3.png";
import star from "../../../assets/section/star.png";

function Section() {
  return (
    <section>
      <p>محبوب‌ترین‌ها</p>
      <div className="bord">
        <Button className="right">
          <img src={Right} alt="arrow" />
        </Button>
        {/* <div className="cart">
          <div className="cartItem">
            <img src={Frame1} alt="Frame1" />
            <h1> آموزش برنامه نویسی جاوا اسکریپت ب...</h1>
            <div className="star">
              <img src={star} alt="star" />
              <p>(102)</p>
            </div>
            <div className="end">
              <p>499،000 تومان</p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div> */}
        <Button className="left">
          <img src={Left} alt="arrow" />
        </Button>
      </div>
    </section>
  );
}
export default Section;
