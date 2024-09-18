import style from "../CartItem/CartItem.module.scss";




export default function CartItem({ techer }) {
  return (
    <>
      <div className={style.CartItem}>
        <img className={style.picT} src={techer.image} alt=""/>
        <div className={style.text}>
          <h5 className={style.name} >{techer.title}</h5>
          <h6 className={style.cours}>{techer.description}</h6>
          <p className={style.p} >{techer.duration}</p>
          <p className={style.p2}>Professor@Tracy D. Wright</p>
        </div>
      </div>
    </>
  );
}
