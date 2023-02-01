import React from "react";
import { BsSuitHeart } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsPerson } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./header.css";
import { Component } from "react";
export const Acceder = ({ myOnclic }) => (
  <button onClick={myOnclic}>Prueba </button>
);

export const Header = ({ setIsOpenMenu }) => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="header">
      <div className="header__rigth">
        <button className="header__btn">
          <RxHamburgerMenu
            className="header__btn-burguer"
            onClick={() => setIsOpenMenu(true)}
          />
        </button>
        <Link to="">
          <p className="header__a">alize</p>
          <p className="header__p">az</p>
        </Link>
      </div>
      <div className="header__center">
        <nav className="header__nav">
          <ul className="header__nav-ul">
            <li className="header__nav-li">
              <a className="header__nav-a" href="">
                Destinos
              </a>
            </li>
            <li className="header__nav-li">
              <a className="header__nav-a" href="">
                Beneficios
              </a>
            </li>
            <li className="header__nav-li">
              <a className="header__nav-a" href="">
                Alquiler de Buses
              </a>
            </li>
            <li className="header__nav-li">
              <a className="header__nav-a" href="">
                Info para viajeros
              </a>
            </li>
            <li className="header__nav-li">
              <a className="header__nav-a" href="">
                Devolucion de pasajes
              </a>
            </li>
            <li className="header__nav-li">
              <a className="header__nav-a" href="">
                Club Recorrer
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__left">
        <BsSuitHeart className="header__btn-menu" />
        <button className="header__left-btn header__left-btn--white">
          Mis favoritos
        </button>

        <button className="header__left-btn" onClick={() => navigate()}>
          <BsPerson className="header__left-person" />
          Acceder
        </button>
      </div>
    </div>
  );
};

export class MasSobreEventos extends Component {
  render() {
    return <h2>Mas sobre eventos</h2>;
  }
}
