import style from "../CartItem/CartItem.module.scss";
import pic from "../../../../assets/section/Frame1.png";

export default function CartItem() {
  return (
    <>
      <div className={style.CartItem}>
        <img className={style.picT} src={pic} alt="" />
        <div className={style.text}>
          <h5 className={style.name}>تریسی دی رایت</h5>
          <h6 className={style.cours}>اصول طراحی وب از جمله HTML، CSS</h6>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
      </div>
    </>
  );
}
