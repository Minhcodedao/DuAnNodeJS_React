import React from "react";
import Logo from "@/assets/logo.svg";
import Icon1 from "@/assets/icons/1.svg";
import Icon2 from "@/assets/icons/2.svg";
import Icon3 from "@/assets/icons/3.svg";
import Icon4 from "@/assets/icons/4.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <a href="" className="header__logo">
              <img src={Logo} alt="" />
            </a>
            <div className="button-mobile">
              <button>=</button>
            </div>
            <nav className="main-menu">
              <ul className="main-menu__list">
                <li className="main-menu__item">
                  <NavLink to="/" className="main-menu__link">
                    Home
                  </NavLink>
                </li>
                <li className="main-menu__item">
                  <NavLink to="/shop" className="main-menu__link">
                    Shop
                  </NavLink>
                </li>
                <li className="main-menu__item">
                  <NavLink to="/about" className="main-menu__link">
                    About
                  </NavLink>
                </li>
                <li className="main-menu__item">
                  <NavLink to="/contact" className="main-menu__link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="header-items">
              <div className="header-item-user">
                <span>
                <Link to ="signin"  ><img src={Icon1} alt="" /></Link>
                </span>
              </div>
              <div className="header-item-user">
                <span>
                  <img src={Icon2} alt="" />
                </span>
              </div>
              <div className="header-item-user">
                <span>
                <Link to ="admin"  ><img src={Icon3} alt="" /></Link>
                </span>
              </div>
              <div className="header-item-user">
                <span>
                <Link to ="cart"  ><img src={Icon4} alt="" /></Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
