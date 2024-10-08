import "./Article.scss";
import CartItem from "../CartItem/CartItem";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import "../Article/Article.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Article() {
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
      <div className="YourText">
        <div className="baner">
          <h1>محبوب‌ترین‌ها</h1>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={9}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {api.map((api) => {
              return (
                <SwiperSlide key={api.id}>
                  {" "}
                  <CartItem key={api.id} api={api} />{" "}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
