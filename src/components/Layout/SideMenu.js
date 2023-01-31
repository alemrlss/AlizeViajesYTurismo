import React from "react";

import { TfiClose } from "react-icons/tfi";
import "./SideMenu.css";

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
            <h1 className="side__title">alize</h1>
          </div>

          <nav className="side__nav">
            <ul className="side__nav-ul">
              <li className="side__nav-li">
                <a className="side__nav-a" href="/">
                  Destinos
                </a>
              </li>
              <li className="side__nav-li">
                <a className="side__nav-a" href="#">
                  Beneficios
                </a>
              </li>
              <li className="side__nav-li">
                <a className="side__nav-a" href="#">
                  Alquiler de Buses
                </a>
              </li>
              <li className="side__nav-li">
                <a className="side__nav-a" href="#">
                  Info para viajeros
                </a>
              </li>
              <li className="side__nav-li">
                <a className="side__nav-a" href="#">
                  Devolucion de pasajes
                </a>
              </li>
              <li className="side__nav-li">
                <a className="side__nav-a" href="#">
                  Club Recorrer
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
