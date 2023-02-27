import React, { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import "./Login.css";

export const Login = ({ showLogin, setShowLogin }) => {
  const [display, setDisplay] = useState("flex");
  const [isRegister, setIsRegister] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     showLogin ? setDisplay("flex") : setDisplay("none");
  //   }, 200);
  // }, [showLogin]);

  return (
    <div
      style={{ display: display }}
      // onClick={() => setShowLogin(false)}
      className={showLogin ? "login" : " login--open login--out"}
    >
      <div
        className={
          showLogin
            ? "login__container "
            : " login__container "
        }
      >
        {isRegister ? (
          <RegisterComponent setShowLogin={setShowLogin} />
        ) : (
          <>
            <div className="login__header">
              <TfiClose
                className="login__icon"
                onClick={() => setShowLogin(false)}
              />
            </div>
            <div className="login__card">
              <div className="login__form">
                <form className="login__email" action="">
                  <h1 className="login__title">Accede a tu cuenta en Alize</h1>
                  <div className="login__input-wrapper">
                    <input
                      className="login__input"
                      placeholder="Email"
                      type="email"
                    />
                  </div>
                  <button className="login__btn">
                    <span className="login__btn-span">Continuar</span>
                  </button>
                </form>
                <div className="login__middle"></div>
                <div className="login__access">
                  <button className="login__access-btn">
                    <span className="login__access-icon login__access-icon--google"></span>
                    <p className="login__access-p">Continuar con Google</p>
                  </button>
                  <button className="login__access-btn login__access-btn--apple">
                    <span className="login__access-icon login__access-icon--apple"></span>
                    <p className="login__access-p">Continuar con Apple</p>
                  </button>
                  <button className="login__access-btn">
                    <span className="login__access-icon login__access-icon--facebook"></span>
                    <p className="login__access-p">Continuar con Facebook</p>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        <a className="login__access-password" href="https://trello.com/b/WXCWhDqJ/alize" onClick={() => setIsRegister(isRegister ? false : true)}>
          {isRegister
            ? "Ya tengo cuenta en fotocasa"
            : "No tengo cuenta y quiero registrarme"}
        </a>
      </div>
    </div>
  );
};

const RegisterComponent = ({ setShowLogin }) => {
  return (
    <>
      <div className="login__header">
        <TfiClose className="login__icon" onClick={() => setShowLogin(false)} />
      </div>
      <div className="login__card">
        <div className="login__form">
          <form className="login__email" action="">
            <h1 className="login__title">Crea tu cuenta en Alize</h1>
            <div className="login__input-wrapper">
              <input
                className="login__input"
                placeholder="Email"
                type="email"
              />
            </div>
            <button className="login__btn">
              <span className="login__btn-span">Continuar</span>
            </button>
          </form>
          <div className="login__middle"></div>
          <div className="login__access">
            <button className="login__access-btn">
              <span className="login__access-icon login__access-icon--google"></span>
              <p className="login__acccess-p">Continuar con Google</p>
            </button>
            <button className="login__access-btn login__access-btn--apple">
              <span className="login__access-icon login__access-icon--apple"></span>
              <p className="login__acccess-p">Continuar con Apple</p>
            </button>
            <button className="login__access-btn">
              <span className="login__access-icon login__access-icon--facebook"></span>
              <p className="login__acccess-p">Continuar con Facebook</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
