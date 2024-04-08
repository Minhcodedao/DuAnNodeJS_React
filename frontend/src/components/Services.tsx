import React from "react";
import Icon5 from "@/assets/icons/5.svg"
import Icon6 from "@/assets/icons/6.svg"
import Icon7 from "@/assets/icons/7.svg"
import Icon8 from "@/assets/icons/8.svg"
import { icons } from "lucide-react";
const Services = () => {
  return (
    <section className="services">
      <div className="container-fluid">
        <div className="service-list">
          <div className="service-item">
            <img src={Icon5} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*End service-item*/}
          <div className="service-item">
            <img src={Icon6} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*End service-item*/}
          <div className="service-item">
            <img src={Icon7} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*End service-item*/}
          <div className="service-item">
            <img src={Icon8} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*End service-item*/}
        </div>
      </div>
    </section>
  );
};

export default Services;
