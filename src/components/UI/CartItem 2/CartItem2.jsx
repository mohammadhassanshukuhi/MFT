import styles from "../CartItem 2/CartItem2.module.scss";

export default function CartItem({ api , key }) {
  return (
    <>
      <div className={styles.CartItem}>
        <img
          className={styles.picT}
          src={`http://localhost:3030${api.image}`}
          alt=""
          key={key}
        />
        <div className={styles.text}>
          <h5 className={styles.name} key={key}>{api.title}</h5>
          <h6 className={styles.cours} key={key}>{api.description}</h6>
          <p className={styles.p} key={key}>{api.duration}</p>
          
        </div>
      </div>
    </>
  );
}
