import CartItem from "../CartItem/CartItem";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import style from "./Section.module.scss";
import "swiper/css";
import "./swiperCustom.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Section() {
  const [api, setApi] = useState([]);

  useEffect(function () {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/favs");
      const jsonData = await response.json();

      setApi(jsonData);

      console.log(jsonData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={style.YourText}>
        <h1 className={style.h1}>محبوب‌ترین‌ها</h1>
          <Swiper
            className={style.Swiper}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={9}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{ 640: { slidesPerView: 3, spaceBetween: 9 } }}
          >
            {api.map((api) => {
              return (
                <SwiperSlide className={style.s} key={api.id}>
                  <CartItem key={api.id} api={api} />{" "}
                </SwiperSlide>
              );
            })}
          </Swiper>
      </div>
    </>
  );
}
export default Section;
