import style from "../CartItem/CartItem.module.scss";

export default function CartItem({ api }) {
  return (
    <>
      <div className={style.CartItem}>
        <img
          className={style.picT}
          src={`http://localhost:3030${api.image}`}
          alt=""
        />
        <div className={style.text}>
          <h5 className={style.name}>{api.title}</h5>
          <h6 className={style.cours}></h6>
        </div>
        <div>
          <p className={style.p}>{`${api.price} تومان`}</p>
        </div>
      </div>
    </>
  );
}
