import React, { useEffect, useState } from "react";

// import React from "react";

import { TfiClose } from "react-icons/tfi";
import "./Favorites.css";

export const Favorites = ({ isFavorite, setIsFavorite }) => {
  const [display, setDisplay] = useState("flex");

  useEffect(() => {
    setTimeout(() => {
      isFavorite ? setDisplay("flex") : setDisplay("none");
    }, 200);
  }, [isFavorite]);

  return (
    <>
      <div
        style={{ display: display }}
        className={
          isFavorite ? "favorite" : "favorite favorite--open favorite--out"
        }
      >
        <div
          className={
            isFavorite
              ? "favorite__container "
              : " favorite__container favorite__container--out "
          }
        >
          <div className="favorite__header">
            <TfiClose
              className="favorite__icon"
              onClick={() => setIsFavorite(false)}
            />
          </div>
          <div className="favorite__wrapper">
            <h1 className="favorite__account">Accede a tu cuenta</h1>
          </div>
          <div className="favorite__card">
            <div className="favorite__input-wrapper">
              <input
                className="favorite__input"
                placeholder="Email *"
                type="email"
              />
            </div>
            <div className="favorite__input-wrapper">
              <input
                className="favorite__input"
                placeholder="Contraseña *"
                type="email"
              />
            </div>
            <div className="favorite__password">
              <a href="/" className="favorite__a">
                He olvidado mi contraseña
              </a>
            </div>
            <button className="favorite__btn">
              <span className="favorite__btn-span">Iniciar Sesion</span>
            </button>
            <div className="favorite__middle"></div>
            <p className="favorite__p">Accede a tu red social favorita:</p>
            <div className="favorite__form">
              <div className="favorite__access">
                <button className="favorite__access-btn">
                  <span className="favorite__access-icon favorite__access-icon--google"></span>
                  <p className="favorite__access-p">Continuar con Google</p>
                </button>
                <button className="favorite__access-btn favorite__access-btn--apple">
                  <span className="favorite__access-icon favorite__access-icon--apple"></span>
                  <p className="favorite__access-p">Continuar con Apple</p>
                </button>
                <button className="favorite__access-btn">
                  <span className="favorite__access-icon favorite__access-icon--facebook"></span>
                  <p className="favorite__access-p">Continuar con Facebook</p>
                </button>
              </div>
            </div>
            <a className="favorite__subtitle-a" href="/">
              No tengo cuenta y quiero registrarme
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
