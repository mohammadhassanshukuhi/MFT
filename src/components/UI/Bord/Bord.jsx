import Button from "../Button/Button";
import styles from "./Bord.module.scss";
import CartItem2 from "../CartItem 2/CartItem2";
import { useEffect, useState } from "react";

export default function Bord() {
  const [api, setApi] = useState([]);

  useEffect(function () {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/course/1");
      const jsonData = await response.json();

      setApi(jsonData);

      console.log(jsonData);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className={styles.body}>
        <h1 className={styles.h1}>جدیدترین دوره‌های آنلاین</h1>

        <div className={styles.board}>
          <div className={styles.upCart}>
            <CartItem2 key={1} api={api} />
            <CartItem2 key={1} api={api} />
          </div>

          <div className={styles.otherCarts}>
            <CartItem2 key={1} api={api} />
            <CartItem2 key={1} api={api} />
          </div>

          <div className={styles.otherCarts}>
            <CartItem2 key={1} api={api} />
            <CartItem2 key={1} api={api} />
          </div>
        </div>

        <Button className={styles.button}>بیشتر</Button>
      </div>
    </>
  );
}
