import "../Article/Article.scss";
import Button from "../Button/Button";
import Right from "../../../assets/YourText/Right.png";
import Left from "../../../assets/YourText/Left.png";
import CartItem from "../Article/CartItem/CartItem"
import sec from "../../../assets/YourText/sec.png";

function Section() {
  return (
    <>
      <div className="YourText">
        <div className="baner">
          <h1>محبوب‌ترین‌ها</h1>
          <div className="bord">
            <Button className="right">
              <img src={Right} alt="Right" />
            </Button>
            {/* 
            <CartItem>
              {loadedMeals.map((meal) => (
                <CartItem key={meal.id} meal={meal} />
              ))}
            </CartItem> */}

            <Button className="left">
              <img src={Left} alt="Left" />
            </Button>
          </div>
        </div>
        <img className="sec" src={sec} alt="sec" />
      </div>
    </>
  );
}
export default Section;
