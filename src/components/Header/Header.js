import React from "react";
import { BsSuitHeart } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsPerson } from "react-icons/bs";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
// import { MenuComponent } from "../Menu/index";
// import { Link, useNavigate, useParams } from "react-router-dom";

import "./header.css";
import { Link } from "react-router-dom";

export const Header = ({ setIsOpenMenu, setShowLogin, setIsFavorite }) => {
  // const navigate = useNavigate();
  // const params = useParams();


  return (
    <>
    
      <div className="header">
        
        <div className="header__rigth">
          <button className="header__btn">
            <RxHamburgerMenu
              className="header__btn-burguer"
              onClick={() => setIsOpenMenu(true)}
            />
          </button>
          <Link to="/">
            <p className="header__a">alize</p>
            <p className="header__p">az</p>
          </Link>
        </div>
        {/* <MenuComponent className="header__menu-component" /> */}
        <div className="header__center">
          <nav className="header__nav">
            <ul className="header__nav-ul">
              <li className="header__nav-li">
                <Link className="header__nav-a" to="/destinos">
                  Destinos
                </Link>
              </li>
              <li className="header__nav-li">
                <Link className="header__nav-a" to="/beneficios">
                  Beneficios
                </Link>
              </li>
              <li className="header__nav-li">
                <Link className="header__nav-a" to="/alquiler">
                  Alquiler de Buses
                </Link>
              </li>
              <li className="header__nav-li">
                <Link className="header__nav-a" to="/info">
                  Info para viajeros
                </Link>
              </li>
              <li className="header__nav-li">
                <Link className="header__nav-a" to="/devolucion">
                  Devolucion de pasajes
                </Link>
              </li>
              <li className="header__nav-li">
                <Link className="header__nav-a" to="/club">
                  Club Recorrer
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__left">
          <BsSuitHeart
            className="header__btn-menu"
            onClick={() => setIsFavorite(true)}
          />
          <button
            onClick={() => setIsFavorite(true)}
            className="header__left-btn header__left-btn--white"
          >
            Mis favoritos
          </button>

          <button className="header__left-btn" onClick={() => setShowLogin(true)}>
            <BsPerson className="header__left-person" />
            Acceder
          </button>
        </div>
      </div>
    </>
  );
};
