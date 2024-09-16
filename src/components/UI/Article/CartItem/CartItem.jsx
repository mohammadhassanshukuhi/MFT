import "./CartItem.scss";
import pic from "../../../../assets/section/Frame1.png";

export default function CartItem() {
  return (
    <>
      <div className="CartItem">
        <img className="picT" src={pic} alt="" />
        <div className="text">
          <h5 className="name">تریسی دی رایت</h5>
          <h6 className="cours">اصول طراحی وب از جمله HTML، CSS</h6>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
      </div>
    </>
  );
}
