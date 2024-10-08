import style from "../CartItem/CartItem.module.scss";

export default function CartItem({ api, key }) {
  return (
    <>
      <div className={style.CartItem}>
        <>
          <img
            key={key}
            className={style.picT}
            src={`http://localhost:3030${api.image}`}
            alt=""
          />
          <div key={key} className={style.text}>
            <h5 key={key} className={style.name}>
              {api.title}
            </h5>
            <h6 key={key} className={style.cours}></h6>
          </div>
          <div>
            <p key={key} className={style.p}>{`${api.price} تومان`}</p>
          </div>
        </>
      </div>
    </>
  );
}
