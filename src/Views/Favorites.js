import React from "react";
import { TfiClose } from "react-icons/tfi";
import "./Favorites.css";

export const Favorites = () => {
  return (
    <div className="favorite">
      <div className="favorite__header">
        <TfiClose className="favorite__icon" />
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
        <p className="favorite__password">He olvidado mi contraseña</p>
        <button className="favorite__btn">
          <span className="favorite__btn-span">Continuar</span>
        </button>
        <div className="favorite__middle"></div>
        <p className="favorite__">Accede a tu red social favorita:</p>
        <div className="favorite__form">
          <div className="favorite__access">
            <button className="favorite__access-btn">
              <span className="favorite__access-icon favorite__access-icon--google"></span>
              <p className="favorite__acccess-p">Continuar con Google</p>
            </button>
            <button className="favorite__access-btn favorite__access-btn--apple">
              <span className="favorite__access-icon favorite__access-icon--apple"></span>
              <p className="favorite__acccess-p">Continuar con Apple</p>
            </button>
            <button className="favorite__access-btn">
              <span className="favorite__access-icon favorite__access-icon--facebook"></span>
              <p className="favorite__acccess-p">Continuar con Facebook</p>
            </button>
          </div>
        </div>
        <h3>No tengo cuenta y quiero <br /> registrarme</h3>
      </div>
    </div>
  );
};
