import React from "react";
import { Link } from "react-router-dom";
// import  "./Entre-Rios";

// import { Link } from "react-router-dom";

import "./terminal.css";

export const Terminales = () => {
  return (
    <>
      <section className="terminal">
        <div className="terminal container">
          <img className="terminal__img-header" src="Images/terminal.jpg" alt="" />

          <h1 className="terminal__visit">Visita nuestras distintas terminales en los diferentes puntos del pais:</h1>

          <div className="terminal__wrapper">

            <div className="terminal__group">
              <Link className="terminal__a" to="/">
                <img className="terminal__img" src="Images/terminal-ER.jpg" alt="" />
                <h2 className="terminal__title">Terminal Colon Entre Rios</h2>
              </Link>
              <p className="terminal__p">Conoce la terminal Colon</p>
            </div>

            <div className="terminal__group">
              <Link className="terminal__a" to="/">
                <img className="terminal__img" src="Images/terminal-gualeguaychu.jpg" alt="" />
                <h2 className="terminal__title">Terminal Gualeguaychu</h2>
              </Link>
              <p className="terminal__p">Conoce la terminal Gualeguaychu</p>
            </div>

            <div className="terminal__group">
              <Link to="/" className="terminal__a" >
                <img className="terminal__img" src="Images/terminal-parana.jpg" alt="" />
                <h2 className="terminal__title">Terminal Parana</h2>
              </Link>
              <p className="terminal__p">Conoce la terminal Parana</p>
            </div>
          </div>
        </div>

        <div class="row text-center py-3 mt-3">
          <div class="col-4 mx-auto">
            <div class="input-group input-group-static">
              <label>First Name</label>
              <input class="form-control" placeholder="eg. Kurt Shelby" type="text" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};





