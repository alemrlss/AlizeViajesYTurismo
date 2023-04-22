import React from "react";

import { TfiClose } from "react-icons/tfi";
import "./SideMenu.css";
import { Link } from "react-router-dom";

export const SideMenu = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <>
      <div className={isOpenMenu ? 'overlay overlay--show' : 'overlay'}  onClick={() => setIsOpenMenu(false)}></div>
      <div className={isOpenMenu ? "side side--show" : "side"}>
        <div className="side__container">
          <div className="side__w">
            <TfiClose
              className="side__icon-close"
              onClick={() => setIsOpenMenu(false)}
            />
            <Link to="/" className="side__title">alize</Link >
          </div>

          <nav className="side__nav">
            <ul className="side__nav-ul">
              <li className="side__nav-li">
                <Link className="side__nav-a" to="/destinos">
                  Destinos
                </Link>
              </li>
              <li className="side__nav-li">
                <Link className="side__nav-a" to="/beneficios">
                  Beneficios
                </Link>
              </li>
              <li className="side__nav-li">
                <Link className="side__nav-a" to="/alquiler">
                  Alquiler de Buses
                </Link>
              </li>
              <li className="side__nav-li">
                <Link className="side__nav-a" to="/info">
                  Info para viajeros
                </Link>
              </li>
              <li className="side__nav-li">
                <Link className="side__nav-a" to="/pasajes">
                  Devolucion de pasajes
                </Link>
              </li>
              <li className="side__nav-li">
                <Link className="side__nav-a" to="/alquiler">
                 Alquiler de buses
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
