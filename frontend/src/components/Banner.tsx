import React from "react";

const Banner = () => {
  return (
    <section className="banner">
      <img
        src="https://picsum.photos/id/3/1440/500"
        alt=""
        className="banner__img"
      />
      <div className="banner__overlay">
        <p className="banner__title__home">Trang chủ</p>
        <span className="banner__title__ho">
          <b>Home</b>
        </span>
      </div>
    </section>
  );
};

export default Banner;
