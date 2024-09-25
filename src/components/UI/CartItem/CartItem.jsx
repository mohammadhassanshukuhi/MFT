import style from "../CartItem/CartItem.module.scss";

export default function CartItem({ api, key }) {
  return (
    <>
      <div className={style.CartItem}>
        {api.leapi.map((api) => {
          console.log(api);
          return (
            <>
              <img key={key} className={style.picT} src={api.image} alt="" />
              <div key={key} className={style.text}>
                <h5 key={key} className={style.name}>{api.title}</h5>
                <h6 key={key} className={style.cours}>{api.description}</h6>
                <p key={key} className={style.p}>{api.duration}</p>
                <p key={key} className={style.p2}>Professor@Tracy D. Wright</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
