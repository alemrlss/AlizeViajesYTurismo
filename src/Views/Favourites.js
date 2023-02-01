import React from "react";
import { TfiClose } from "react-icons/tfi";
import "./Favourites.css";

export const Favorites = () => {
  return (
    <div className="favourite">
      <div className="favourite__header">
        <TfiClose className="favourite__icon" />
      </div>
      <div className="favourite__wrapper">
        <h1 className="favourite__account">Accede a tu cuenta</h1>
      </div>
      <div className="favourite__card">
        <div className="favourite__input-wrapper">
          <input
            className="favourite__input"
            placeholder="Email *"
            type="email"
          />
        </div>
        <div className="favourite__input-wrapper">
          <input
            className="favourite__input"
            placeholder="Contraseña *"
            type="email"
          />
        </div>
        <p className="favourite__password">He olvidado mi contraseña</p>
        <button className="favourite__btn">
          <span className="favourite__btn-span">Continuar</span>
        </button>
        <div className="favourite__middle"></div>
        <p>Accede a tu red social favorita:</p>
        <div className="favourite__form">
          <div className="favourite__access">
            <button className="favourite__access-btn">
              <span className="favourite__access-icon favourite__access-icon--google"></span>
              <p className="favourite__acccess-p">Continuar con Google</p>
            </button>
            <button className="favourite__access-btn favourite__access-btn--apple">
              <span className="favourite__access-icon favourite__access-icon--apple"></span>
              <p className="favourite__acccess-p">Continuar con Apple</p>
            </button>
            <button className="favourite__access-btn">
              <span className="favourite__access-icon favourite__access-icon--facebook"></span>
              <p className="favourite__acccess-p">Continuar con Facebook</p>
            </button>
          </div>
        </div>
        <h3>No tengo cuenta y quiero <br /> registrarme</h3>
      </div>
    </div>
  );
};
